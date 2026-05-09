import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import { auth, onAuthStateChanged, signOut } from "./firebase";
import AuthPage from "./pages/AuthPage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u ?? null);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (loading) return null; // wait for Firebase to check auth

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <AuthPage onLogin={setUser} />}
        />
        <Route
          path="/"
          element={user ? <GalleryPage user={user} onSignOut={handleSignOut} /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}