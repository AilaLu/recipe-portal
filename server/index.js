import express from 'express';
import recipeRoutes from './routes/recipe.js'; // Updated path

const router = express.Router();

// Mount recipe routes under /api/recipes (relative to the /api base in app.js)
router.use('/recipes', recipeRoutes);

export default router;