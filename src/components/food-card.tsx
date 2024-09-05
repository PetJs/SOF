import React from 'react';

type Ingredient = {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  name: string;
  original: string;
  unit: string;
};

type FoodCardProps = {
  title: string;
  image: string;
  missedIngredients: Ingredient[];
  usedIngredients: Ingredient[];
};

const FoodCard: React.FC<FoodCardProps> = ({ title, image, missedIngredients, usedIngredients }) => {
  console.log('Missed Ingredients:', missedIngredients);
  console.log('Used Ingredients:', usedIngredients);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div>
          <h3 className="text-lg font-medium">Missed Ingredients</h3>
          {missedIngredients && missedIngredients.length > 0 ? (
            <ul>
              {missedIngredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
            </ul>
          ) : (
            <p>No missed ingredients</p>
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium">Used Ingredients</h3>
          {usedIngredients && usedIngredients.length > 0 ? (
            <ul>
              {usedIngredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.name}</li>
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

export default FoodCard;
