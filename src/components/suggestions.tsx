import { useState, useEffect, createContext, ReactNode } from 'react';

type Ingredient = {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  name: string;
  original: string;
  unit: string;
};

type Recipe = {
  id: number;
  title: string;
  image: string;
  missedIngredients: Ingredient[];
  usedIngredients: Ingredient[];
  unusedIngredients: Ingredient[];
};

interface RecipeContextType {
  recipes: Recipe[];
  searchQuery: string;
  filteredRecipes: Recipe[];
  error: string | null;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RecipeContextProviderProps {
  children: ReactNode;
}

const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';
const API_KEY = 'f728eec052034105936a1d371fe61e69';

export const RecipeContext = createContext<RecipeContextType | null>(null);

export const RecipeContextProvider = ({ children }: RecipeContextProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch recipes from the API based on ingredients
  const fetchRecipes = async (ingredients: string = '', number: number = 10): Promise<void> => {
    try {
      const response = await fetch(
        `${API_URL}?ingredients=${encodeURIComponent(ingredients)}&number=${number}&apiKey=${API_KEY}`, 
        { method: 'GET' }
      );
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      console.log('Fetched data:', data); // Check the structure of fetched data
  
      setRecipes(data || []); // Update state with fetched recipe data
      setFilteredRecipes(data || []);
      setError(null);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Failed to fetch recipes. Please try again.');
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    if (searchQuery) {
      fetchRecipes(searchQuery); // Fetch recipes based on the initial search query
    }
  }, [searchQuery]);

  // Handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <RecipeContext.Provider value={{ recipes, searchQuery, filteredRecipes, error, handleSearch }}>
      {children}
    </RecipeContext.Provider>
  );
};
