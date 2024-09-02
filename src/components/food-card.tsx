import React from 'react';

type Recipe = {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
};

interface FoodCardProps {
  recipe: Recipe;
}

export const FoodCard: React.FC<FoodCardProps> = ({ recipe }) => {
  return (
    <div className="food-card">
      <h2>Title: {recipe.title}</h2>
      <p>{recipe.ingredients}</p>
      <p>{recipe.servings}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
};

