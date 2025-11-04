import React from "react";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark border-top border-secondary">
      <div className="container d-flex justify-content-between align-items-center text-light">
        <span className="small">© {new Date().getFullYear()} HexTech-Hub</span>

        <div className="d-flex gap-3">
          <a className="text-light" href="#" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a className="text-light" href="#" aria-label="X">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a className="text-light" href="#" aria-label="Discord">
            <i className="bi bi-discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
