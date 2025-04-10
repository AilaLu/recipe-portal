import express from 'express';
import { Recipe } from '../model/Recipe.js';
import mongoose from 'mongoose';
import OpenAI from 'openai';

const router = express.Router();

// Initialize OpenAI (ensure your API key is set in .env)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// GET /api/recipes/search?query=<partial_recipe_name>
router.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Search query is required.' });
  }

  try {
    const results = await Recipe.find({ $text: { $search: query } })
      .sort({ score: { $meta: 'textScore' } })
      .limit(5);

    if (results.length > 0) {
      console.log('return jasonnnnn')
      return res.json(results);
    } else {
      try {
        console.log('No results found, calling OpenAI...')
        const chatCompletion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: `Generate 5 recipes in JSON format for "${query}". Each recipe should have "name" (string) and "ingredients" (array of ingredient objects with "name", "quantity" (string), and optional "unit" (string)). Return a JSON array of these recipe objects. Example: ${JSON.stringify([
              { "name": "Recipe 1", "ingredients": [{ "name": "Ing 1", "quantity": "1" }] },
              { "name": "Recipe 2", "ingredients": [{ "name": "Ing A", "quantity": "2" }] }
            ])}`
          }],
          n: 1,
          response_format: { type: "json_object" },
        });

        if (chatCompletion.choices && chatCompletion.choices.length > 0) {
          try {
            const content = chatCompletion.choices[0].message?.content;
            if (content) {
              const aiRecipes = JSON.parse(content);
              if (Array.isArray(aiRecipes)) {
                // Immediately send the AI-generated recipes to the frontend
                res.json(aiRecipes.map(recipe => ({ ...recipe, isAiGenerated: true })));

                // Asynchronously save the AI-generated recipes to the database
                aiRecipes.forEach(async (aiRecipe) => {
                  try {
                    const existingRecipe = await Recipe.findOne({ name: aiRecipe.name });
                    if (!existingRecipe) {
                      const newRecipe = new Recipe({ ...aiRecipe, isAiGenerated: true });
                      await newRecipe.save();
                      console.log(`AI-generated recipe "${aiRecipe.name}" saved.`);
                    }
                  } catch (saveError) {
                    console.error('Error saving AI-generated recipe:', saveError);
                  }
                });
              } else {
                console.error('ChatGPT response is not an array:', aiRecipes);
                return res.status(500).json({ error: 'Failed to parse AI recipes.' });
              }
            } else {
              return res.status(500).json({ error: 'ChatGPT response content is empty.' });
            }
          } catch (parseError) {
            console.error('Error parsing ChatGPT JSON response:', parseError);
            return res.status(500).json({ error: 'Failed to parse AI recipe JSON.' });
          }
        } else {
          return res.status(500).json({ error: 'Failed to generate recipes from ChatGPT.' });
        }
      } catch (openAiError) {
        console.error('OpenAI API error:', openAiError);
        return res.status(500).json({ error: `Error communicating with the ChatGPT API: ${openAiError.message}` });
      }
    }
  } catch (error) {
    console.error('Error during recipe search:', error);
    res.status(500).json({ message: 'Failed to search recipes.' });
  }
});

// GET /api/recipes/:recipeId
router.get('/:recipeId', async (req, res) => {
  const { recipeId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(recipeId)) {
    return res.status(400).json({ message: 'Invalid recipe ID.' });
  }
  try {
    const recipe = await Recipe.findById(recipeId);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found.' });
    }
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    res.status(500).json({ message: 'Failed to fetch recipe details.' });
  }
});

// POST /api/grocery-checklist
router.post('/grocery-checklist', async (req, res) => {
  const { recipeIds } = req.body;
  if (!Array.isArray(recipeIds) || recipeIds.length === 0 || recipeIds.length > 4) {
    return res.status(400).json({ message: 'Please provide an array of 1 to 4 recipe IDs.' });
  }
  if (!recipeIds.every(id => mongoose.Types.ObjectId.isValid(id))) {
    return res.status(400).json({ message: 'Invalid recipe ID(s) provided.' });
  }
  try {
    const recipes = await Recipe.find({ _id: { $in: recipeIds } });
    if (recipes.length !== recipeIds.length) {
      return res.status(404).json({ message: 'One or more recipe IDs not found.' });
    }
    const consolidatedIngredients = {};
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(item => {
        const ingredientName = item.name.trim().toLowerCase();
        const quantity = parseFloat(item.quantity);
        const unit = item.unit ? item.unit.trim().toLowerCase() : '';
        if (consolidatedIngredients[ingredientName]) {
          if (consolidatedIngredients[ingredientName].unit === unit && !isNaN(quantity)) {
            consolidatedIngredients[ingredientName].totalQuantity += quantity;
          } else {
            const existingEntry = consolidatedIngredients[ingredientName].entries.find(
              entry => entry.unit === unit
            );
            if (existingEntry && !isNaN(quantity)) {
              existingEntry.quantity += quantity;
            } else {
              consolidatedIngredients[ingredientName].entries.push({ quantity, unit });
            }
          }
        } else {
          consolidatedIngredients[ingredientName] = {
            name: item.name,
            totalQuantity: isNaN(quantity) ? undefined : quantity,
            unit: unit,
            entries: isNaN(quantity) ? [] : [{ quantity, unit }],
          };
        }
      });
    });
    const checklist = Object.values(consolidatedIngredients).map(item => {
      if (item.totalQuantity !== undefined) {
        return { name: item.name, totalQuantity: item.totalQuantity, unit: item.unit };
      } else {
        return { name: item.name, details: item.entries.map(e => `${e.quantity} ${e.unit}`).join(', ') || 'See recipe' };
      }
    });
    res.json(checklist);
  } catch (error) {
    console.error('Error generating grocery checklist:', error);
    res.status(500).json({ message: 'Failed to generate grocery checklist.' });
  }
});

export default router;