import { useState, useEffect, createContext, ReactNode } from 'react';

type Recipe = {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
};

interface RecipeContextProvider {
  recipes: Recipe[];
  searchQuery: string;
  filteredRecipes: Recipe[];
  error: string | null;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RecipeContextProps {
  children: ReactNode;
}

const API_URL = 'https://api.api-ninjas.com/v1/recipe?query=';
const API_KEY = 'iGrtlj60oM1LfEaw7Xhic2F4ub83QiXABToq8Wmgf';

export const RecipeContext = createContext<RecipeContextProvider | null>(null);

export const RecipeContextProvider = ({ children }: RecipeContextProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch recipes from the API on initial render
    const fetchRecipes = async (query: string): Promise<void> => {
      try {
        const response = await fetch(`${API_URL}${encodeURIComponent(query)}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': API_KEY,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setRecipes(data); // Set the recipes fetched from the API
          setFilteredRecipes(data); // Initially, filtered recipes are the same as all recipes
          setError(null); // Clear any previous errors
        } else {
          console.error('Error fetching recipes:', response.statusText);
          setError(`Error: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to fetch recipes. Please try again.');
      }
    };

    fetchRecipes(''); // Fetch default recipes or a set with a meaningful query
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredRecipes(recipes); // Show all recipes when there's no search query
      setError(null); // Clear error when there's no search query
    } else {
      const keywords = searchQuery.toLowerCase().split(',').map(keyword => keyword.trim());

      if (keywords.length < 3) {
        setError('You must provide at least 3 keywords.');
        setFilteredRecipes([]); // Clear the filtered recipes
      } else {
        setError(null); // Clear the error if validation passes

        const filtered = recipes.filter(recipe =>
          keywords.every(keyword =>
            recipe.title.toLowerCase().includes(keyword) ||
            recipe.ingredients.toLowerCase().includes(keyword) ||
            recipe.instructions.toLowerCase().includes(keyword)
          )
        );

        setFilteredRecipes(filtered);
      }
    }
  }, [searchQuery, recipes]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  return (
    <RecipeContext.Provider value={{ recipes, searchQuery, filteredRecipes, error, handleSearch }}>
      {children}
    </RecipeContext.Provider>
  );
};
