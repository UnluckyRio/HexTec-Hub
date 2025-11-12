import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  login: (token?: string, remember?: boolean) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "auth:token";
const AUTH_CHANGED_EVENT = "auth:changed";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem(STORAGE_KEY) || !!sessionStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setIsAuthenticated(
          !!localStorage.getItem(STORAGE_KEY) || !!sessionStorage.getItem(STORAGE_KEY)
        );
      }
    };
    const onAuthChanged = () => {
      setIsAuthenticated(
        !!localStorage.getItem(STORAGE_KEY) || !!sessionStorage.getItem(STORAGE_KEY)
      );
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(AUTH_CHANGED_EVENT, onAuthChanged as EventListener);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(
        AUTH_CHANGED_EVENT,
        onAuthChanged as EventListener
      );
    };
  }, []);

  const login = (token?: string, remember: boolean = true) => {
    const value = token ?? "demo-token";
    if (remember) {
      localStorage.setItem(STORAGE_KEY, value);
    } else {
      sessionStorage.setItem(STORAGE_KEY, value);
    }
    window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
  };

  const value = useMemo<AuthContextValue>(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
