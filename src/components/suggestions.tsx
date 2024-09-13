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
  favorites: Recipe[];
  toggleFavorite: (recipe: Recipe) => void;
}

interface RecipeContextProviderProps {
  children: ReactNode;
}

const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';
const API_KEY = 'c3ec9ded9b724a66986ed0bc937f48ef';

export const RecipeContext = createContext<RecipeContextType | null>(null);

export const RecipeContextProvider = ({ children }: RecipeContextProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Recipe[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Function to toggle a recipe as a favorite
  const toggleFavorite = (recipe: Recipe) => {
    if (!recipe) return; // Safeguard against null recipe

    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.some((fav) => fav?.id === recipe?.id);
      const updatedFavorites = isFavorited
        ? prevFavorites.filter((fav) => fav?.id !== recipe?.id)
        : [...prevFavorites, recipe];

      // Save updated favorites to localStorage
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  // Function to fetch recipes from the API based on ingredients
  const fetchRecipes = async (ingredients: string = '', number: number = 10): Promise<void> => {
    try {
      const response = await fetch(
        `${API_URL}?ingredients=${encodeURIComponent(ingredients)}&number=${number}&apiKey=${API_KEY}`,
        { method: 'GET' }
      );

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('API limit reached. Please try again later.');
        }
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
    <RecipeContext.Provider value={{ recipes, searchQuery, filteredRecipes, error, handleSearch, favorites, toggleFavorite }}>
      {children}
    </RecipeContext.Provider>
  );
};
