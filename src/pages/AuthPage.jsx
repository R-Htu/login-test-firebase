import { useState } from "react";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import "./auth.css";
export default function AuthPage({ onLogin }) {
  const [tab, setTab] = useState("signin");

  return (
    <div className="lm-auth-page">
      <div className="lm-auth-box">

        <div className="lm-auth-logo">
          <p className="icon">🌙</p>
          <h1>Lady Midnight</h1>
          <p>private gallery</p>
        </div>

        <div className="lm-auth-tabs">
          <button
            className={`lm-auth-tab${tab === "signin" ? " active" : ""}`}
            onClick={() => setTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`lm-auth-tab${tab === "signup" ? " active" : ""}`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {tab === "signin" ? (
          <SignInPage onLogin={onLogin} />
        ) : (
          <SignUpPage onSwitchToSignIn={() => setTab("signin")} />
        )}

      </div>
    </div>
  );
}
