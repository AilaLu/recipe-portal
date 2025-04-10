// server/models/Recipe.js
import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{
    name: String,
    quantity: String,  // "2 cups" or "to taste"
    unit: String
  }],
});

export const Recipe = mongoose.model('Recipe', RecipeSchema);