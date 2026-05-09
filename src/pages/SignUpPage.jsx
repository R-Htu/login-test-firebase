import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase";
import "./auth.css";

export default function SignUpPage({ onSwitchToSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");


  const handleSignUp = async () => {
    setError("");

    if (!name || !email || !password) return setError("Please fill in all fields.");

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });
      setTimeout(() => onSwitchToSignIn(), 3000);
    } catch (e) {
      setError(e.message);
    } 
  };

  return (
    <>
      {error && <div className="lm-auth-error">{error}</div>}


      <div className="lm-form-group">
        <label>Display Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
          placeholder="Min. 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="lm-auth-btn" onClick={handleSignUp} >
        Create Account
      </button>
    </>
  );
}
