// src/slices/grocerySlice.js
import { createSlice } from '@reduxjs/toolkit';

const grocerySlice = createSlice({
  name: 'grocery',
  initialState: {
    items: [], // Array of recipe IDs
  },
  reducers: {
    addToGroceryList: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFromGroceryList: (state, action) => {
      state.items = state.items.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const { addToGroceryList, removeFromGroceryList } = grocerySlice.actions;
export default grocerySlice.reducer;