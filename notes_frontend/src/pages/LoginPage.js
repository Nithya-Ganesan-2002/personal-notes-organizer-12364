import React, { useState } from "react";

// PUBLIC_INTERFACE
function LoginPage({ onLogin, onNav }) {
  /** Login form page as described in design specs */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    // Simulate: real auth call goes here
    setTimeout(() => {
      if (email === "demo@example.com" && password === "test123") {
        onLogin({ email });
      } else {
        setError("Incorrect email or password.");
      }
      setSubmitting(false);
    }, 700);
  };

  return (
    <div className="login-bg">
      <div className="login-appbar">
        <span className="login-logo-dot"></span>
        <span className="login-logo-text">KAVIA.AI</span>
      </div>
      <div className="login-center">
        <div className="login-card" role="dialog" aria-labelledby="login-title">
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="login-card-title" id="login-title">
              Sign in to Kavia
            </div>
            <label className="login-label">
              Email address
              <input
                className="login-input"
                aria-label="Email address"
                type="email"
                required
                autoComplete="email"
                maxLength={64}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
              />
            </label>
            <label className="login-label">
              <span style={{ float: "left" }}>Password</span>
              <span
                className="forgot-link"
                onClick={() => alert("Reset password flow...")}
                style={{
                  fontSize: 12,
                  color: "#297CFF",
                  float: "right",
                  cursor: "pointer",
                }}
                tabIndex="0"
                role="link"
              >
                Forgot password?
              </span>
              <input
                className="login-input"
                aria-label="Password"
                type="password"
                required
                autoComplete="current-password"
                maxLength={32}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={submitting}
              />
            </label>
            {error && <div className="login-error">{error}</div>}
            <button
              type="submit"
              className="login-btn"
              disabled={!email || !password || submitting}
            >
              {submitting ? "Signing in..." : "Login"}
            </button>
            <div className="login-bottom">
              Don&apos;t have an account?{" "}
              <span
                className="signup-link"
                onClick={() => onNav("signup")}
                tabIndex="0"
                role="link"
                style={{ color: "#297CFF", cursor: "pointer", fontWeight: 600 }}
              >
                Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
