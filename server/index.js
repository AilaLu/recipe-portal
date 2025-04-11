import dotenv from "dotenv";
import router from "./routes/auth.js";
import cors from "cors";
import morgan from "morgan";
import express from "express";
dotenv.config();
import mongoose from "mongoose";
import passport from "../passport/passport.js"; // Adjust path if needed
import recipeRoutes from './routes/recipe.js'; // Updated path for recipe routes

const app = express();
app.use(cors());
app.use(morgan("dev"));
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Mount your API routes here
const apiRouter = express.Router();
apiRouter.use('/recipes', recipeRoutes);
app.use('/api', apiRouter);
app.use("/auth", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app; // If you need to export the app instance