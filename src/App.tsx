import SuggestionsPage from './components/suggestions-page'
import { RecipeContextProvider } from './components/suggestions'
import LandingPage from './landingpage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <RecipeContextProvider>
            {/* <LandingPage /> */}
            <Routes>
              <Route path="/" element={<Navigate to="/landingPage" />} />
              <Route path="/landingPage" element={<LandingPage />} />
              <Route path="/suggestions" element={<SuggestionsPage />} />
            </Routes>
        </RecipeContextProvider>
      </Router>
      
    </>
  )
}

export default App
