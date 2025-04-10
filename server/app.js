import dotenv from "dotenv";
import router from "./routes/auth.js"
import cors from "cors"
import morgan from "morgan"
import express from "express";
dotenv.config();
import mongoose from "mongoose";
import passport from "./passport/passport.js";
// import passport from "passport";

const app = express();
app.use(cors())
app.use(morgan("dev"))
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/auth", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
