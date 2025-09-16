// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut } from "../Services/Auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function handleGoogleSignIn() {
    setError(null);
    setStatus("submitting");
    try {
      const userCred = await signInWithGoogle(rememberMe);

      // Save profile in Firestore (merge so old data isn’t lost)
      const userRef = doc(db, "users", userCred.user.uid);
      await setDoc(
        userRef,
        {
          fullname: userCred.user.displayName || "",
          email: userCred.user.email,
          createdAt: new Date(),
        },
        { merge: true }
      );

      setStatus("submitted");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setError(err);
      setStatus("typing");
    }
  }

  async function handleSignOut() {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="Form">
      <h2>Sign in with VIT Google Account</h2>

      {status === "submitted" && (
        <p style={{ color: "green" }}>Success — redirecting...</p>
      )}

      {error && <div style={{ color: "red" }}>{error.message}</div>}

      <div style={{ marginTop: 8 }}>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={status === "submitting"}
        >
          <i className="fa-brands fa-google" style={{ marginRight: 6 }}></i>
          Continue with Google
        </button>
      </div>

      <label style={{ display: "block", marginTop: 8 }}>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Remember me
      </label>

      <div style={{ marginTop: 12 }}>
        <p>
          <button onClick={handleSignOut}>Sign out</button>
        </p>
      </div>
    </div>
  );
}
