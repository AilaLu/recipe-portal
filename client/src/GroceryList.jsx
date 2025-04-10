// src/GroceryList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromGroceryList } from './slices/grocerySlice'; // Import action to remove

const GroceryList = () => {
  const groceryItems = useSelector((state) => state.grocery.items);
  const dispatch = useDispatch();

  const handleRemove = (recipeId) => {
    dispatch(removeFromGroceryList(recipeId));
  };

  if (groceryItems.length === 0) {
    return <div className="p-4">Your grocery list is empty.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Shopping List</h2>
      <ul>
        {groceryItems.map((recipeId) => (
          <li key={recipeId} className="flex items-center justify-between py-2 border-b border-gray-200">
            {/* You'll need to fetch the actual recipe name based on the ID */}
            {/* For now, just displaying the ID */}
            <span>Recipe ID: {recipeId}</span>
            <button
              onClick={() => handleRemove(recipeId)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;