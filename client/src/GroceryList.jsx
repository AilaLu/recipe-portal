// src/components/GroceryList.jsx
import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromGroceryList } from './slices/grocerySlice'; // Corrected import path
import { Link } from 'react-router-dom';

const GroceryList = () => {
  const recipeIds = useSelector((state) => state.grocery.items);
  const dispatch = useDispatch();
  const [groceryIngredients, setGroceryIngredients] = useState([]);
  const [recipesInList, setRecipesInList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredientsAndRecipeNames = async () => {
      setLoading(true);
      setError(null);
      try {
        const allIngredients = [];
        const fetchedRecipes = [];

        for (const recipeId of recipeIds) {
          const response = await fetch(`/api/recipes/${recipeId}`);
          if (!response.ok) {
            const message = `HTTP error! status: ${response.status}`;
            throw new Error(message);
          }
          const recipeData = await response.json();
          if (recipeData) {
            if (recipeData.ingredients) {
              allIngredients.push(...recipeData.ingredients);
            }
            fetchedRecipes.push({ _id: recipeData._id, name: recipeData.name });
          }
        }

        // Combine duplicate ingredients
        const combinedIngredients = allIngredients.reduce((acc, ingredient) => {
          const key = `${ingredient.name}-${ingredient.unit || ''}`;
          if (acc[key]) {
            acc[key].quantity = (parseFloat(acc[key].quantity) || 0) + (parseFloat(ingredient.quantity) || 0);
          } else {
            acc[key] = { ...ingredient };
          }
          return acc;
        }, {});

        // Format quantities
        const formattedIngredients = Object.values(combinedIngredients).map(ingredient => {
          const quantity = parseFloat(ingredient.quantity);
          return { ...ingredient, quantity: Number.isInteger(quantity) ? quantity.toString() : quantity.toFixed(2) };
        });

        setGroceryIngredients(formattedIngredients);
        setRecipesInList(fetchedRecipes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (recipeIds.length > 0) {
      fetchIngredientsAndRecipeNames();
    } else {
      setGroceryIngredients([]);
      setRecipesInList([]);
      setLoading(false);
    }
  }, [recipeIds]);

  const handleRemove = (recipeId) => {
    dispatch(removeFromGroceryList(recipeId));
  };

  if (loading) {
    return <div className="p-4">Loading grocery list...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading grocery list: {error}</div>;
  }

  if (groceryIngredients.length === 0) {
    return (
      <div className="p-4">
        Your grocery list is empty.
        <Link to="/" className="inline-block ml-2 text-[#D43D88] hover:underline">
          Find Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Shopping List</h2>
      <ul>
        {groceryIngredients.map((ingredient, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
            <span>{ingredient.name}</span>
            <span>
              {ingredient.quantity} {ingredient.unit && `(${ingredient.unit})`}
            </span>
            {/* Implement removal of individual ingredients if needed */}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mt-4">Recipes Added:</h3>
      <ul>
        {recipesInList.map((recipe) => (
          <li key={recipe._id} className="py-1 flex items-center justify-between">
            <span>{recipe.name}</span>
            <button
              onClick={() => handleRemove(recipe._id)}
              className="text-red-500 hover:text-red-700 focus:outline-none text-sm"
            >
              Remove Recipe
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link to="/" className="bg-[#D43D88] text-white rounded-full py-2 px-6 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#D43D88] inline-block">
          Back to Recipes
        </Link>
      </div>
    </div>
  );
};

export default GroceryList;