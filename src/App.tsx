import SuggestionsPage from './components/suggestions-page'
import { RecipeContextProvider } from './components/suggestions'
import LandingPage from './components/landingpage'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {

  return (
    <>
      <Router>
        <RecipeContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
          </Routes>
        </RecipeContextProvider>
      </Router>
      {/*<RecipeContextProvider>
        <SuggestionsPage />
      </RecipeContextProvider>*/}
    </>
  );
}

export default App
