import { useContext } from 'react';
import { RecipeContext } from './suggestions';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // Use optional chaining to safely access context values
  const context = useContext(RecipeContext);
  const favorites = context?.favorites || [];
  const toggleFavorite = context?.toggleFavorite;

  return (
    <div className="favdiv flex flex-col items-center pt-20">
      <h1 className="text-5xl font-extrabold mb-10">My Favorite Recipes</h1>

      {favorites.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {favorites.map((recipe) => 
            recipe ? ( // Check if recipe is not null or undefined
              <div key={recipe.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-md hover:scale-105 duration-300 rounded-lg overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{recipe.title}</h2>
                    <button
                      onClick={() => toggleFavorite && toggleFavorite(recipe)}
                      className="text-red-500 py-1 px-2 border border-red-500 hover:text-red-700 hover:border-red-700 mt-4"
                    >
                      Remove from Favorite
                    </button>
                  </div>
                </div>
              </div>
            ) : null // Render nothing if recipe is null or undefined
          )}
        </div>
      ) : (
        <p className="text-lg font-medium text-gray-500 mt-10">
          You haven't added any recipes to your favorites yet.
        </p>
      )}

      <div className='flex gap-16 text-red-500 my-10 font-semibold text-[20px]'>
        <Link to="/" className="hover:underline">
          Back to Home
        </Link>
        <Link to="/suggestions" className="hover:underline">
          Back to Recipe
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
