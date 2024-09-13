import { useState, useEffect, useContext } from 'react';
import { RecipeContext } from './suggestions';
import LoadingCard from './loading-card';
import { Link } from 'react-router-dom';
import { Auth } from './signInPage';
import { Heart } from 'lucide-react';

// Define Ingredient type
interface Ingredient {
  amount: number;
  unit: string;
  name: string;
}

// Define APIIngredient type (matches the data from API)
interface APIIngredient {
  amount: number;
  unit: string;
  name: string;
  aisle: string;
  id: number;
  image: string;
  original: string;
}

// Define Recipe type
interface Recipe {
  id: number;
  title: string;
  image: string;
  missedIngredients: APIIngredient[];
  usedIngredients: APIIngredient[];
}

// Map APIIngredient to the simpler Ingredient type used by the component
const mapIngredients = (ingredients: APIIngredient[]): Ingredient[] => {
  return ingredients.map((ingredient) => ({
    amount: ingredient.amount,
    unit: ingredient.unit,
    name: ingredient.name,
  }));
};

const FoodCard: React.FC<{
  title: string;
  image: string;
  missedIngredients: Ingredient[];
  usedIngredients: Ingredient[];
  onclick: () => void;
  recipe: Recipe;
}> = ({ title, image, missedIngredients, usedIngredients, onclick }) => {
  return (
    <div onClick={onclick} className="bg-white shadow-md h-[30rem] hover:scale-105 duration-300 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div>
          <h3 className="text-lg font-medium">Missed Ingredients</h3>
          {missedIngredients.length > 0 ? (
            <ul className="list-disc list-inside">
              {missedIngredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No missed ingredients</p>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium">Used Ingredients</h3>
          {usedIngredients.length > 0 ? (
            <ul className="list-disc list-inside">
              {usedIngredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No used ingredients</p>
          )}
        </div>
      </div>
    </div>
  );
};


// SuggestionsPage component
const SuggestionsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { favorites, toggleFavorite } = useContext(RecipeContext) || {};

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const { filteredRecipes, handleSearch, searchQuery } = useContext(RecipeContext) as {
    filteredRecipes: Recipe[];
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
  };

  const handleCardClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    if (searchQuery.length >= 3 || filteredRecipes.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [filteredRecipes, searchQuery]);

  const handleSubmitSearch = () => {
    if (searchQuery.trim() === '') {
      setError('Please enter some ingredients to search.');
    } else {
      setError(null);
      handleSearch({ target: { value: searchQuery } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center pt-20">
      {!isAuthenticated ? (
        <Auth onSignIn={handleSignIn} />
      ) : (
        <>
          <h1 className="text-5xl text-center m-8 font-extrabold">Don't know what to cook? Don't worry, we've got you</h1>
          <span className="bg-[#964b00db] rounded-full text-white text-5xl font-extrabold pb-6 px-8 pt-2 text-center">
            covered.
          </span>

          <div className="flex justify-center gap-2 mt-10 max-w-[100%] px-8">
            <input
              value={searchQuery}
              onChange={handleSearch}
              className="rounded-full outline-none px-4 font-bold w-96"
              placeholder="Onions, Tomatoes, rice, pepper..."
              type="text"
            />
            <button
              className="bg-[#c54b1f] rounded-full text-lg text-white font-semibold px-10 py-4"
              onClick={handleSubmitSearch}
            >
              Search
            </button>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <p className="font-bold mb-4 text-slate-700">
            Try inputting more than one keyword in the search bar to get accurate results.
          </p>

          <div className="flex flex-wrap gap-3 justify-center w-[70%]">
            {loading ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <FoodCard
                    title={recipe.title}
                    image={recipe.image}
                    missedIngredients={mapIngredients(recipe.missedIngredients || [])}
                    usedIngredients={mapIngredients(recipe.usedIngredients || [])}
                    onclick={() => handleCardClick(recipe)}
                    recipe={recipe}
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No recipes found. Try adjusting your search.</p>
            )}
          </div>

          {selectedRecipe && (
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
                <button className="absolute top-0 right-0 rounded-md p-1 text-red-500 hover:text-white hover:bg-red-600" onClick={handleClose}>
                  ✕
                </button>
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  className="rounded-lg w-full h-60 object-cover mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{selectedRecipe.title}</h2>

                <h3 className="text-xl font-semibold mt-4">Used Ingredients</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedRecipe.usedIngredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mt-4">Missed Ingredients</h3>
                <ul className="list-disc list-inside">
                  {selectedRecipe.missedIngredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => {
                    if (toggleFavorite) { // Ensure it's defined before calling
                      toggleFavorite(selectedRecipe);
                    }
                  }}
                  className={`py-1 px-2 mt-6 rounded-md border border-black ${favorites?.some((fav) => fav.id === selectedRecipe.id) ? 'bg-red-500 text-white border border-red-500' : 'bg-gray-500'}`}
                >
                  <Heart/>
                </button>
              </div>
            </div>
          )}

          <div className="py-10 text-red-500 font-semibold text-[20px] flex space-x-16">
            <Link to="/" className='hover:underline'>Home Page</Link>
            <Link to={"/profile"} className='hover:underline'>My Profile</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SuggestionsPage;

