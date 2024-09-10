import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { provider, auth } from "../config/firebase";

interface AuthProps {
  onSignIn: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state to check if the user is signed in

  // Check if the user is already signed in when the component loads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        onSignIn(); // User is signed in, update state
      }
      setIsLoading(false); // Reset the loading to false
    });

    return () => unsubscribe(); 
  }, [onSignIn]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      onSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleEmailSignIn = async () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSignIn();
      setError(null);
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Failed to sign in. Please try again.");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="auth_container">
      <h2>Sign in with your email</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={8}
      />
      <button
        onClick={handleEmailSignIn}
        disabled={!validateEmail(email) || password.length < 8}
      >
        Sign In
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Sign in with your Google account</p>
      <button onClick={signInWithGoogle}>Google</button>
    </div>
  );
};
