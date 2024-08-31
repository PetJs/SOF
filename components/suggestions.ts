import { useState, useEffect } from 'react';

type Recipe = {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
};

const API_URL = 'https://api.api-ninjas.com/v1/recipe?query=';
const API_KEY = 'iFaKgpowGoldtv2FLvdDXw==X9EX1mlI5eNxJcT1'; 

export const useRecipeSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null); // Error state

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
          setFilteredRecipes(data); // Initially, show all recipes
        } else {
          console.error('Error fetching recipes:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes(''); // Fetch default suggestions with an empty query
  }, []);

  useEffect(() => {
    // If no search query, show all recipes
    if (!searchQuery) {
      setFilteredRecipes(recipes);
      setError(null); // Clear error when there's no search query
    } else {
      const keywords = searchQuery.toLowerCase().split(',').map(keyword => keyword.trim());

      // Check if the number of keywords is less than 3
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
    setSearchQuery(event.target.value);
  };

  return { searchQuery, handleSearch, filteredRecipes, error };
};

