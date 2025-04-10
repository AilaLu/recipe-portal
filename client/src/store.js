// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import groceryReducer from './slices/grocerySlice';

const store = configureStore({
  reducer: {
    grocery: groceryReducer,
    // Add other reducers here if you have them
  },
});

export default store;