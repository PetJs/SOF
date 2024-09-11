import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { provider, auth } from "../config/firebase";
import { Utensils } from 'lucide-react';


interface AuthProps {
  onSignIn: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onSignIn }) => {
  //State Management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state to track whether the authentication status is being checked

  // Check if the user is already signed in when the component loads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { //listens for cahnges in authentication state
      if (user) {
        onSignIn(); // User is signed in, update state
      }
      setIsLoading(false); // Reset the loading to false
    });

    return () => unsubscribe(); // stops listening for changes or updates
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
    <div className="authentication bg-[#e0693d] rounded-3xl">
      <div className="logo flex gap-1 items-center text-white justify-center py-8">
        <Utensils size={'50px'}/>
        <h3 className="text-[50px] font-bold">SOF</h3>
      </div>
      <h2 className="text-center my-10 text-white font-semibold text-[20px]">Sign in with your email</h2>
      <div className="emailandpassword flex flex-col space-y-6 w-[80%]">
        <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-black rounded-full py-[10px] border-white pl-6'
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-black rounded-full py-[10px] border-white pl-6'
            required
            minLength={8}
          />
          <button
            onClick={handleEmailSignIn}
            disabled={!validateEmail(email) || password.length < 8}
            className='rounded-full py-[8px] bg-[#72e37e] text-white font-semibold hover:bg-white hover:text-[#3c2c1e]'
          >
            SIGN IN
          </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="google my-16 text-white flex flex-col items-center">
        <p className="text-center font-semibold text-[20px]">Sign in with other account</p>
        <button onClick={signInWithGoogle}
          className="mt-6 rounded-md py-[8px] border border-white w-[80%] hover:bg-white hover:text-[#3c2c1e]"
        >
            Google
        </button>
      </div>

    </div>
  );
};
