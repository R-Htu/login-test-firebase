import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";
import "./auth.css";

export default function SignInPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

/*
cred = {
  user: {
    uid: "123",
    email: "abc@gmail.com"
  }
}
*/
  const handleSignIn = async () => {
    setError("");
    if (!email || !password) return setError("Please fill in all fields.");
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      onLogin(cred.user);
      console.log(cred)
    } catch (e) {
      setError(e.message);
    } 
  };

  return (
    <>
      {error && <div className="lm-auth-error">{error}</div>}

      <div className="lm-form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="lm-form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="lm-auth-btn" onClick={handleSignIn}>
        Enter Gallery
      </button>
    </>
  );
}
