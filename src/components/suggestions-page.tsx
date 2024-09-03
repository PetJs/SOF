import { useState, useEffect, useContext } from 'react';
import FoodCard from './food-card'; // Assuming FoodCard is a component for displaying a single recipe
import LoadingCard from './loading-card'; // Assuming LoadingCard is a component for displaying a loading state
import { RecipeContext } from './suggestions'; // Import the context

const SuggestionsPage = () => {
  const context = useContext(RecipeContext);

  // Check if the context is available
  if (!context) {
    throw new Error('RecipeContext must be used within a RecipeContextProvider');
  }

  const { filteredRecipes, handleSearch, searchQuery, error } = context;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading state based on the filteredRecipes and searchQuery
    if (searchQuery.length >= 3 || filteredRecipes.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [filteredRecipes, searchQuery]);

  return (
    <div className="flex flex-col justify-start items-center pt-40">
      <h1 className="text-5xl text-center m-8 font-extrabold">
        Don't know what to cook? Don't worry, we've got you
      </h1>
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
          onClick={() => handleSearch({ target: { value: searchQuery } } as React.ChangeEvent<HTMLInputElement>)}
        >
          Search
        </button>
      </div>
      <p className="font-bold mb-4 text-slate-700">
        Try inputting more than one keyword in the search bar to get accurate results.
      </p>
      {error && <p className="text-red-500">{error}</p>} {/* Display error if there is any */}
      <div className="flex flex-wrap gap-4 w-[70%]">
        {loading ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          filteredRecipes.length > 0 ? (
            filteredRecipes.map(recipe => (
              <div key={recipe.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
                <FoodCard
                  title={recipe.title}
                  image={recipe.image}
                  missedIngredients={recipe.missedIngredients || []}
                  usedIngredients={recipe.usedIngredients || []}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No recipes found. Try adjusting your search.</p>
          )
        )}
      </div>
    </div>
  );
};

export default SuggestionsPage;
