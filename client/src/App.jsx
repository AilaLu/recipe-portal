import './App.css';
import dotenv from 'dotenv'
dotenv.config
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/viva-chef-logo.svg';
import RecipeDetailsModal from './ RecipeDetailsModal';
import GroceryList from './GroceryList';
import { useDispatch, useSelector } from 'react-redux';
import { addToGroceryList } from './slices/grocerySlice';
// import GoogleAuthCallback from './GoogleAuthCallback'; // Import the callback component

// // Access Google Client ID from environment variable
// const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// const GOOGLE_REDIRECT_URI = '/auth/google/callback'; // Frontend route

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [errorResults, setErrorResults] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const groceryList = useSelector((state) => state.grocery.items);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClear = () => {
    setSearchTerm('');
    setSearchResults([]);
    setErrorResults(null);
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setErrorResults(null);
      return;
    }
    setLoadingResults(true);
    setErrorResults(null);
    try {
      const response = await fetch(`/api/recipes/search?query=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      setErrorResults(error.message);
      console.error('Error searching recipes:', error);
      setSearchResults([]);
    } finally {
      setLoadingResults(false);
    }
  };

  // const handleGoogleLogin = () => {
  //   if (!GOOGLE_CLIENT_ID) {
  //     console.error("Google Client ID is not set in the environment variables!");
  //     return;
  //   }
  //   const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${window.location.origin}${GOOGLE_REDIRECT_URI}&scope=profile email&response_type=code`;
  //   window.location.href = authUrl;
  // };


  const handleRecipeCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const handleAddToGrocery = (recipe) => {
    dispatch(addToGroceryList(recipe._id));
    alert(`${recipe.name} added to grocery list!`);
  };

  const goToGroceryList = () => {
    navigate('/grocery');
  };

  const RecipeCard = ({ recipe }) => (
    <div
      key={recipe._id}
      className="bg-white rounded-md shadow-md p-4 mb-4 cursor-pointer hover:shadow-lg flex flex-col"
    >
      <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
      {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
        <p key={index} className="text-sm text-gray-700">{ingredient.name} {ingredient.quantity && `${ingredient.quantity}`} {ingredient.unit}</p>
      ))}
      <button
        onClick={() => handleAddToGrocery(recipe)}
        className="bg-[#D43D88] text-white rounded-full py-2 px-4 mt-2 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#D43D88] self-start"
      >
        Add to Grocery
      </button>
      <button
        onClick={() => handleRecipeCardClick(recipe)}
        className="text-sm text-gray-600 mt-1 hover:underline focus:outline-none self-start"
      >
        View Details
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-8">
      <header className="w-full max-w-lg flex justify-between items-center mb-8">
        <Link to="/" className="hover:opacity-80">
          <img src={logo} alt="VivaChefs Logo" className="h-8 w-auto" />
        </Link>
        <button
          onClick={goToGroceryList}
          className="bg-white text-[#D43D88] border border-[#D43D88] rounded-full py-2 px-4 hover:bg-[#f8d1e3] focus:outline-none focus:ring-2 focus:ring-[#D43D88]"
        >
          Grocery List ({groceryList.length})
        </button>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <form
                onSubmit={handleSearchSubmit}
                className="bg-white rounded-full border-[6px] border-[#D43D88] shadow-md p-2 flex items-center w-full max-w-lg mb-8"
              >
                <div className="flex-grow relative">
                  <input
                    id="recipe-search-input"
                    name="recipe-search"
                    type="text"
                    autoComplete="off"
                    placeholder="search recipe"
                    className="bg-white w-full rounded-full py-3 pl-5 pr-10 focus:outline-none"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={handleSearchClear}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 hover:text-gray-700 focus:outline-none rounded-full flex items-center justify-center"
                      style={{ borderRadius: '50%' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#D43D88] border-[#D43D88] text-white rounded-full py-3 px-6 ml-4 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#D43D88]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-6a7 7 0 10-14 0 7 7 0 0014 0z" />
                  </svg>
                </button>
              </form>

              {loadingResults && <p className="mt-4">Searching for recipes...</p>}
              {errorResults && <p className="mt-4 text-red-500">Error: {errorResults}</p>}

              {searchResults.length > 0 && (
                <div className="mt-8 w-full max-w-lg">
                  <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
                  {searchResults.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                  ))}
                </div>
              )}

              <div className="text-center mt-8">
                <button
                // onClick={handleGoogleLogin}
                  className="bg-[#D43D88] text-white rounded-full py-3 px-8 hover:bg-[#D43D88] focus:outline-none focus:ring-2 focus:bg-[#D43D88]"
                >
                  Login with Google
                </button>
                <p className="text-gray-500 mt-2">Redefining putting a fresh meal on a family table</p>
              </div>
            </>
          }
        />
        <Route path="/grocery" element={<GroceryList />} />
      </Routes>

      {isModalOpen && selectedRecipe && (
        <RecipeDetailsModal recipe={selectedRecipe} onClose={closeModal} />
      )}

      <footer className="mt-12 text-center text-gray-500 w-full max-w-lg">
        <p>&copy; 2025 VivaChefs - Inspired Design</p>
      </footer>
    </div>
  );
}

export default App;