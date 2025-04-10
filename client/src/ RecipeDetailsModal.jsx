// src/RecipeDetailsModal.jsx
import React from 'react';

const RecipeDetailsModal = ({ recipe, onClose }) => {
  if (!recipe) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-md shadow-lg p-8 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">{recipe.name}</h2>
        <h4 className="text-md font-semibold mb-2">Ingredients:</h4>
        <ul>
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc ml-5">{ingredient.name} {ingredient.quantity && `(${ingredient.quantity} ${ingredient.unit || ''})`}</li>
          ))}
          {!recipe.ingredients && <p className="text-gray-500">No ingredients listed.</p>}
        </ul>
        {/* You can add more recipe details here if available in the recipe object */}
      </div>
    </div>
  );
};

export default RecipeDetailsModal;