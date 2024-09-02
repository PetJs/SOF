import { useState, useEffect } from 'react';
import { FoodCard } from './food-card';
import LoadingCard from './loading-card';
import useRecipeContext from './useContext';

const SuggestionsPage = () => {
  const { filteredRecipes, handleSearch, searchQuery } = useRecipeContext(); // Destructure from context
  const [loading, setLoading] = useState(true);

  // Set loading to false when filteredRecipes updates
  useEffect(() => {
    console.log(filteredRecipes); // Add this to check if filteredRecipes is populated
    if (filteredRecipes.length > 0 || searchQuery.length >= 3) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [filteredRecipes, searchQuery]);

  return (
    <>
      <div className="flex flex-col justify-start items-center pt-40">
        <h1 className="text-5xl text-center m-8 font-extrabold">
          Don't know what to cook? Don't worry, we've got you
        </h1>
        <span className="bg-[#964b00db] rounded-full text-white text-5xl font-extrabold pb-6 px-8 pt-2 text-center">
          covered.
        </span>
        <div className="flex justify-center gap-2 mt-10 max-w-[100%] px-8">
          <input
            value={searchQuery} // Bind the input value to searchQuery
            onChange={handleSearch} // Handle input changes
            className="rounded-full outline-none px-4 font-bold w-96"
            placeholder="Onions, Tomatoes, rice, pepper..."
            type="text"
          />

          <button className="bg-[#c54b1f] rounded-full text-lg text-white font-semibold px-10 py-4">
            Search
          </button>
        </div>
        <p className="font-bold mb-4 text-slate-700">
          Try inputting more than one keyword in the search bar to get accurate results.
        </p>
        <div className="flex flex-wrap gap-4 w-[70%]">
          {loading ? (
            <>
              {/* Show loading cards while loading */}
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
          ) : (
            // Render actual food cards based on filtered recipes
            filteredRecipes.length > 0 && (
              filteredRecipes.map((recipe, index) => (
                <FoodCard key={index} recipe={recipe} />
              ))
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SuggestionsPage;
