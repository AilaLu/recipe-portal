// frontend/src/App.jsx
import './App.css';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/viva-chef-logo.svg';
import RecipeDetailsModal from './ RecipeDetailsModal';
import GroceryList from './GroceryList'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToGroceryList } from './slices/grocerySlice';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [errorSuggestions, setErrorSuggestions] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [errorResults, setErrorResults] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const groceryList = useSelector((state) => state.grocery.items);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.trim()) {
      fetchSuggestions(newSearchTerm);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchClear = () => {
    setSearchTerm('');
    setSuggestions([]);
    setSearchResults([]);
    setErrorSuggestions(null);
    setErrorResults(null);
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const fetchSuggestions = async (query) => {
    setLoadingSuggestions(true);
    setErrorSuggestions(null);
    try {
      const response = await fetch(`/api/recipes/search?query=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (response.status === 204) {
        setSuggestions([]);
      } else {
        const data = await response.json();
        setSuggestions(data);
      }
    } catch (error) {
      setErrorSuggestions(error.message);
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setErrorResults(null);
      return;
    }
    setSearchResults(suggestions.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
    setSelectedRecipe(suggestion);
    setIsModalOpen(true);
  };

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
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={suggestions.length > 0}
                    placeholder="search recipe"
                    className="bg-white w-full rounded-full py-3 pl-5 pr-10 focus:outline-none"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={handleSearchClear}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  {loadingSuggestions && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-md z-10">
                      <div className="py-2 px-4 text-gray-600">Loading suggestions...</div>
                    </div>
                  )}
                  {errorSuggestions && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-red-500 rounded shadow-md z-10">
                      <div className="py-2 px-4 text-red-600">Error: {errorSuggestions}</div>
                    </div>
                  )}
                  {suggestions.length > 0 && !loadingSuggestions && !errorSuggestions && (
                    <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-md z-10">
                      {suggestions.map((suggestion) => (
                        <li
                          key={suggestion._id}
                          className="py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion.name}
                        </li>
                      ))}
                    </ul>
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

              {/* Login Button */}
              <div className="text-center mt-8">
                <button
                  // onClick={loginWithGoogle}
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

      {/* Recipe Details Modal */}
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