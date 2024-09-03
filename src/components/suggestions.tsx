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

const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'c81f930089604a68a1f703a8f90aa529';

export const RecipeContext = createContext<RecipeContextType | null>(null);

export const RecipeContextProvider = ({ children }: RecipeContextProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch recipes from the API
  const fetchRecipes = async (query: string = ''): Promise<void> => {
    try {
      const response = await fetch(`${API_URL}?query=${encodeURIComponent(query)}&apiKey=${API_KEY}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log('Fetched data:', data.results); // Check if data.results is populated

      setRecipes(data.results || []); // Default to empty array if data.results is undefined
      setFilteredRecipes(data.results || []);
      setError(null);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Failed to fetch recipes. Please try again.');
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchRecipes(); // Fetch all recipes initially or with a default query
  }, []);

  // Update filtered recipes when searchQuery or recipes change
  useEffect(() => {
    if (!searchQuery) {
      setFilteredRecipes(recipes); // Show all recipes when there's no search query
      setError(null);
    } else {
      const keywords = searchQuery.toLowerCase().split(',').map(keyword => keyword.trim());

      const filtered = recipes.filter(recipe => {
        const titleMatch = keywords.every(keyword =>
          recipe.title.toLowerCase().includes(keyword)
        );

        const missedIngredientsMatch = recipe.missedIngredients && recipe.missedIngredients.length > 0
          ? keywords.every(keyword =>
              recipe.missedIngredients.some(ingredient =>
                ingredient.name.toLowerCase().includes(keyword)
              )
            )
          : false;

        const usedIngredientsMatch = recipe.usedIngredients && recipe.usedIngredients.length > 0
          ? keywords.every(keyword =>
              recipe.usedIngredients.some(ingredient =>
                ingredient.name.toLowerCase().includes(keyword)
              )
            )
          : false;

        return titleMatch || missedIngredientsMatch || usedIngredientsMatch;
      });

      if (filtered.length === 0) {
        setError('No recipes match your search.');
      } else {
        setError(null);
      }

      setFilteredRecipes(filtered);
    }
  }, [searchQuery, recipes]);

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
