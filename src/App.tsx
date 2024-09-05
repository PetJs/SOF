import SuggestionsPage from './components/suggestions-page'
import { RecipeContextProvider } from './components/suggestions'
import './App.css'

function App() {

  return (
    <>
      <RecipeContextProvider>
        <SuggestionsPage />
      </RecipeContextProvider>
    </>
  )
}

export default App
