import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Home.scss";
import "../styles/login.scss";

async function sha256Hex(input: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  const bytes = new Uint8Array(hash);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function getCsrfToken(): string {
  const key = "csrf:token";
  let t = sessionStorage.getItem(key);
  if (!t) {
    t = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem(key, t);
    document.cookie = `csrfToken=${t}; SameSite=Lax; Secure`;
  }
  return t;
}

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const idValid = useMemo(() => {
    const trimmed = identifier.trim();
    if (!trimmed) return false;
    const looksEmail = /.+@.+\..+/.test(trimmed);
    const looksUser = /^[A-Za-z0-9_.-]{3,}$/.test(trimmed);
    return looksEmail || looksUser;
  }, [identifier]);

  const canSubmit = idValid && password.length >= 6 && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      const csrf = getCsrfToken();
      const passwordHash = await sha256Hex(`${identifier}|${password}|${csrf}`);
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
        body: JSON.stringify({ identifier, passwordHash }),
        credentials: "include",
      });
      if (!res.ok) {
        if (res.status === 401) throw new Error("Invalid credentials");
        if (res.status === 423) throw new Error("Account locked");
        throw new Error("Authentication error");
      }
      const data = await res.json().catch(() => ({}));
      const token: string | undefined = data.token ?? "demo-token";
      login(token, remember);
      const redirectTo = (location.state as any)?.from?.pathname ?? "/";
      navigate(redirectTo, { replace: true });
    } catch (err: any) {
      setError(err?.message ?? "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-section login-page">
      <main className="container py-4" aria-labelledby="login-title">
        <h2 id="login-title" className="title mb-3">
          Login
        </h2>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} aria-describedby="login-help">
            <div id="login-help" className="visually-hidden">
              Enter email/username and password to sign in.
            </div>

            <div className="mb-3">
              <label htmlFor="identifier" className="form-label text-light">
                Email or username
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                className="form-control"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                aria-invalid={!idValid}
                aria-describedby="identifier-help"
                required
              />
              <div id="identifier-help" className="form-text text-light">
                Use your email or a username (minimum 3 characters).
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">
                Password
              </label>
              <div className="input-group">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                  aria-describedby="password-help"
                />
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-pressed={showPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div id="password-help" className="form-text text-light">
                At least 6 characters.
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label className="form-check-label text-light" htmlFor="remember">
                Remember me
              </label>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div className="d-flex align-items-center gap-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!canSubmit}
                aria-busy={loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                Sign In
              </button>
              <button
                type="button"
                className="btn btn-warning text-dark"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>

            <div className="mt-3">
              <a href="#/forgot-password" className="link-info">
                Forgot password
              </a>
            </div>
          </form>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
