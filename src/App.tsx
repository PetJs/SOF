import SuggestionsPage from './components/suggestions-page'
import { RecipeContextProvider } from './components/suggestions'
import LandingPage from './components/landingpage'
import ProfilePage from './components/profilepage';
import {Auth} from './components/signInPage';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './config/firebase';

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);


const App: React.FC = ()=> {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      setIsAuthenticated(!!user);
      setIsLoading(false)
    })

    return () => unsubscribe();

  }, [])

  if (isLoading){
    return <div>Loading...</div>
  }

  return (
    <>
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated}}>
      <Router>
        <RecipeContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<Auth onSignIn={() => setIsAuthenticated(true)} />} /> {/* Route for sign-in */}
            <Route path="/suggestions" element={isAuthenticated? <SuggestionsPage /> : <Navigate to="/sign-in"/> } />
            <Route path="/profile" element={isAuthenticated? <ProfilePage/> : <Navigate to="/sign-in"/> } />
          </Routes>
        </RecipeContextProvider>
      </Router>
      {/*<RecipeContextProvider>
        <SuggestionsPage />
      </RecipeContextProvider>*/}
    </AuthContext.Provider>
    </>
  );
}

export default App
