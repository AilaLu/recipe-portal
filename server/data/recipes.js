import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { Recipe } from "../model/Recipe.js";

const Recipes =[
 {
   "name": "Aloo Gobi",
   "ingredients": [
     {
       "name": "potato (Aloo)",
       "quantity": "4.0"
     },
     {
       "name": "Cauliflower (Gobi)",
       "quantity": "1.0",
       "unit": "head"
     }
   ]
 },
 {
   "name": "Aloo Methi Paratha",
   "ingredients": [
     {
       "name": "Potato",
       "quantity": "5.0"
     },
     {
       "name": "Wheat Flour",
       "quantity": "4.0",
       "unit": "cup"
     },
     {
       "name": "Methi leaves (Fenugreek)",
       "quantity": "1.0",
       "unit": "bunch"
     }
   ]
 },
 {
   "name": "Aloo Palak",
   "ingredients": [
     {
       "name": "potato",
       "quantity": "3.0"
     },
     {
       "name": "Spinach",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Aloo Paratha",
   "ingredients": [
     {
       "name": "Potato",
       "quantity": "5.0"
     },
     {
       "name": "Wheat Flour",
       "quantity": "4.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Aloo Pyaaz Paratha",
   "ingredients": [
     {
       "name": "Potato",
       "quantity": "5.0"
     },
     {
       "name": "Wheat Flour",
       "quantity": "4.0",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Aloo Tikki",
   "ingredients": [
     {
       "name": "Aloo",
       "quantity": "5.0"
     },
     {
       "name": "Corn Flour",
       "quantity": "5.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Ambur Biryani",
   "ingredients": [
     {
       "name": "Onion",
       "quantity": "4.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Green Chilli",
       "quantity": "4.0"
     },
     {
       "name": "Bone in Chicken",
       "quantity": "3.0",
       "unit": "lb"
     },
     {
       "name": "Lemon",
       "quantity": "1.0"
     },
     {
       "name": "Short grain Rice (Samba preferred)",
       "quantity": "3.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Bagara Baingan",
   "ingredients": [
     {
       "name": "Eggplants",
       "quantity": "10.0"
     }
   ]
 },
 {
   "name": "Baingan Bharta",
   "ingredients": [
     {
       "name": "Eggplants (~1.5 lb)",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Dry Coconut (Grated)",
       "quantity": "3.0",
       "unit": "tbsp"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Green Chilli",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Beerakaya Curry",
   "ingredients": [
     {
       "name": "Beerakaya (Ridge Gourd)",
       "quantity": "3.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Green Chili",
       "quantity": "2.0"
     },
     {
       "name": "Onions",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Bhindi Fry",
   "ingredients": [
     {
       "name": "Okra (Bhindi)",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "4.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Spring Onion (Optional)",
       "quantity": "3.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Bhindi Vepudu",
   "ingredients": [
     {
       "name": "Okra (Bhindi)",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Boondi Raita",
   "ingredients": [
     {
       "name": "Plain Whole Milk Yogurt",
       "quantity": "3.0",
       "unit": "cup"
     },
     {
       "name": "Boondi",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Cucumber",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Butter Chicken",
   "ingredients": [
     {
       "name": "Boneless, skinless Chicken Thigh",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Cashew nuts",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     },
     {
       "name": "Whole milk Yogurt",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Heavy whipping cream",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Cooking Oil",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "Butter",
       "quantity": "0.25",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Cabbage Pesarapappu Kura",
   "ingredients": [
     {
       "name": "Cabbage",
       "quantity": "1.0",
       "unit": "head"
     },
     {
       "name": "Moong Dal",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Cabbage Porial",
   "ingredients": [
     {
       "name": "Urad Dal",
       "quantity": "1.5",
       "unit": "tsp"
     },
     {
       "name": "Chana Dal",
       "quantity": "1.5",
       "unit": "tsp"
     },
     {
       "name": "Cabbage",
       "quantity": "1.0",
       "unit": "head"
     },
     {
       "name": "Jaggery",
       "quantity": "2.0",
       "unit": "tsp"
     },
     {
       "name": "Coconut Shredded",
       "quantity": "6.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Chana Masala",
   "ingredients": [
     {
       "name": "Chana raw, soaked overnight",
       "quantity": "0.7",
       "unit": "lb"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Chettinad Chicken",
   "ingredients": [
     {
       "name": "Boneless chicken thighs",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Chettinad Paneer",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "1.1",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Chicken 65",
   "ingredients": [
     {
       "name": "Boneless chicken thighs",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Ginger garlic paste",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Lemon juice",
       "quantity": "3.0",
       "unit": "tbsp"
     },
     {
       "name": "Cornstarch or all-purpose flour",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Rice flour (optional, for extra crispiness)",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Egg",
       "quantity": "1.0"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Chicken Biryani",
   "ingredients": [
     {
       "name": "Onion",
       "quantity": "4.0"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Green Chilli",
       "quantity": "2.0"
     },
     {
       "name": "Chicken Thighs",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Lemon",
       "quantity": "1.0"
     },
     {
       "name": "Basmati Rice",
       "quantity": "3.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Chicken Chilli",
   "ingredients": [
     {
       "name": "Boneless Chicken",
       "quantity": "1.25",
       "unit": "lb"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0",
       "unit": "each"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Spring onions",
       "quantity": "2.0",
       "unit": "stalks"
     },
     {
       "name": "Cornstarch",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "All-purpose flour",
       "quantity": "2.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Chicken Chilli Curry",
   "ingredients": [
     {
       "name": "Boneless Chicken",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     }
   ]
 },
 {
   "name": "Chicken Curry",
   "ingredients": [
     {
       "name": "Bone in Chicken",
       "quantity": "2.25",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "6.0"
     },
     {
       "name": "Tomato",
       "quantity": "4.0"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Chicken Jhol Momos",
   "ingredients": [
     {
       "name": "Ground chicken",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomatos",
       "quantity": "6.0"
     },
     {
       "name": "Momo Wrappers",
       "quantity": "30.0"
     },
     {
       "name": "Cilantro",
       "quantity": "1.0",
       "unit": "bunch"
     }
   ]
 },
 {
   "name": "Chicken Korma",
   "ingredients": [
     {
       "name": "Boneless, skinless Chicken Thigh",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Cashew nuts",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     },
     {
       "name": "Whole milk Yogurt",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Heavy whipping cream",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Cooking Oil",
       "quantity": "2.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Chicken Manchurian",
   "ingredients": [
     {
       "name": "Boneless chicken breast/ thigh",
       "quantity": "1.0",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Maida/ All purpose flour",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Corn Starch",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Egg",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Chicken Masala",
   "ingredients": [
     {
       "name": "Chicken thighs",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "ginger garlic paste",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "Green chilies",
       "quantity": "2.0"
     },
     {
       "name": "Cilantro",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Cooking oil",
       "quantity": "3.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Chicken Saag",
   "ingredients": [
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Spinach",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Boneless chicken breast",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Whole milk Yogurt",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Chicken Salna",
   "ingredients": [
     {
       "name": "Chicken",
       "quantity": "1.1",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "tomato",
       "quantity": "2.0"
     },
     {
       "name": "Green Chilies",
       "quantity": "5.0"
     }
   ]
 },
 {
   "name": "Chicken Shami Kabab",
   "ingredients": [
     {
       "name": "Ground chicken",
       "quantity": "1.25",
       "unit": "lb"
     },
     {
       "name": "Chana dal (soaked for 2 hours)",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Garlic",
       "quantity": "4.0",
       "unit": "cloves"
     },
     {
       "name": "Ginger",
       "quantity": "1.0",
       "unit": "inch"
     },
     {
       "name": "Green chilies",
       "quantity": "2.0"
     },
     {
       "name": "Fresh Cilantro Leaves",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Fresh mint leaves",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Ghee or oil",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "Egg (optional, for binding)",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Chicken Tikka Masala",
   "ingredients": [
     {
       "name": "Heavy cream",
       "quantity": "250.0",
       "unit": "ml"
     },
     {
       "name": "Tomato",
       "quantity": "4.0"
     },
     {
       "name": "Lemons",
       "quantity": "2.0"
     },
     {
       "name": "Boneless Chicken Thighs",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Dahiwale Aloo",
   "ingredients": [
     {
       "name": "potato (Aloo)",
       "quantity": "6.0"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "2.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Dal Makhani",
   "ingredients": [
     {
       "name": "Black Urad Dal (Black Gram)",
       "quantity": "1.5",
       "unit": "cup"
     },
     {
       "name": "Rajma",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "4.0"
     }
   ]
 },
 {
   "name": "Dal Tadka",
   "ingredients": [
     {
       "name": "Toor Dal",
       "quantity": "1.5",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     },
     {
       "name": "Moong Dal",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Egg Curry",
   "ingredients": [
     {
       "name": "Eggs",
       "quantity": "9.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Green Chili",
       "quantity": "2.0"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Coconut milk (optional)",
       "quantity": "1.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Fish Curry",
   "ingredients": [
     {
       "name": "Fish fillets (tilapia, cod,halibut,pompfret)",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Coconut Milk (optional)",
       "quantity": "2.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Fish Pulusu",
   "ingredients": [
     {
       "name": "Fish fillets (tilapia, cod, or halibut)",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Goan Fish Curry",
   "ingredients": [
     {
       "name": "Fish fillets (tilapia, cod, or halibut)",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Coconut Milk",
       "quantity": "2.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Gobi Manchurian",
   "ingredients": [
     {
       "name": "Cauliflower",
       "quantity": "1.0"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Maida/ Whole flour",
       "quantity": "1.5",
       "unit": "cup"
     },
     {
       "name": "Corn Starch",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Gobi Matar",
   "ingredients": [
     {
       "name": "Green Peas",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Cauliflower (Gobi)",
       "quantity": "1.0",
       "unit": "head"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Gobi Matar Sabzi",
   "ingredients": [
     {
       "name": "potato (Optional)",
       "quantity": "2.0"
     },
     {
       "name": "Cauliflower (Gobi)",
       "quantity": "1.0",
       "unit": "head"
     },
     {
       "name": "Peas",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Cilantro",
       "quantity": "0.5",
       "unit": "bunch"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Gobi Sabzi",
   "ingredients": [
     {
       "name": "potato (Aloo)",
       "quantity": "2.0"
     },
     {
       "name": "Cauliflower (Gobi)",
       "quantity": "1.0",
       "unit": "head"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Green Beans Sabzi",
   "ingredients": [
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Green Beans",
       "quantity": "2.2",
       "unit": "lb"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Green chilli",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Gutti Vankaya",
   "ingredients": [
     {
       "name": "Eggplants",
       "quantity": "12.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Green Chili",
       "quantity": "4.0"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Peanuts",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Grated Coconut",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Hakka Noodles",
   "ingredients": [
     {
       "name": "Noodles",
       "quantity": "0.7",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Cabbage",
       "quantity": "0.5"
     },
     {
       "name": "Spring Onion",
       "quantity": "3.0",
       "unit": "tbsp"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Green Beans",
       "quantity": "5.0"
     }
   ]
 },
 {
   "name": "Hot and Sour Soup",
   "ingredients": [
     {
       "name": "Spring Onion",
       "quantity": "0.5",
       "unit": "bunch"
     },
     {
       "name": "Carrot",
       "quantity": "2.0"
     },
     {
       "name": "Cabbage",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Green Beans",
       "quantity": "10.0"
     },
     {
       "name": "Corn Flour",
       "quantity": "4.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Jeera Rice",
   "ingredients": [
     {
       "name": "Basmati Rice",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Ghee or Oil",
       "quantity": "2.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Kaali Dal",
   "ingredients": [
     {
       "name": "Black Urad Dal",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "tomato",
       "quantity": "2.5"
     }
   ]
 },
 {
   "name": "Kadai Chicken",
   "ingredients": [
     {
       "name": "Boneless Chicken Thighs",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Heavy Whipping Cream",
       "quantity": "5.0",
       "unit": "tbsp"
     },
     {
       "name": "Green bell pepper",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Kadai Paneer",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "3.0"
     },
     {
       "name": "Tomato",
       "quantity": "5.0"
     },
     {
       "name": "Heavy Whipping Cream (optional)",
       "quantity": "5.0",
       "unit": "tbsp"
     },
     {
       "name": "Green bell pepper",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Kala Chana",
   "ingredients": [
     {
       "name": "Chana raw, soaked overnight",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Keema Matar",
   "ingredients": [
     {
       "name": "Ground meat (Any meat of your choice)",
       "quantity": "1.25",
       "unit": "lb"
     },
     {
       "name": "Green Peas (Matar)",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     }
   ]
 },
 {
   "name": "Lauki Chana Dal",
   "ingredients": [
     {
       "name": "Chana raw, soaked overnight",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Lauki (Bottle gourd)",
       "quantity": "1.0"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     },
     {
       "name": "Onions",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Lauki Kofta Curry",
   "ingredients": [
     {
       "name": "Lauki (Bottel Gourd/Calabash)",
       "quantity": "1.0"
     },
     {
       "name": "Gram Flour (Besan)",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Corn Flour",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Cashews (allergies permitting)",
       "quantity": "15.0"
     },
     {
       "name": "Heavy Whipping Cream",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Malai Kofta",
   "ingredients": [
     {
       "name": "potato",
       "quantity": "4.0"
     },
     {
       "name": "Paneer",
       "quantity": "0.4",
       "unit": "lb"
     },
     {
       "name": "Corn Flour",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Cashews",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Raisins (optional)",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Heavy Whipping Cream",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Matar Paneer",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Green Peas",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Green chilli (if spicy is needed)",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Medu Vada",
   "ingredients": [
     {
       "name": "Urad dal (split black gram lentils)",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Green chilies",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Methi Malai Paneer",
   "ingredients": [
     {
       "name": "Yogurt/ Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Cashew nuts",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Paneer",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Methi leaves (fenugreek)",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Milk",
       "quantity": "0.25",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Methi Matar Malai",
   "ingredients": [
     {
       "name": "Yogurt/ Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Cashew nuts",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Green Peas (mattar)",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Methi leaves (fenugreek)",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Milk",
       "quantity": "0.25",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Methi Pappu",
   "ingredients": [
     {
       "name": "Toor Dal",
       "quantity": "1.5",
       "unit": "cup"
     },
     {
       "name": "Methi leaves (Fenugreek)",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Green Chilies",
       "quantity": "3.0"
     }
   ]
 },
 {
   "name": "Methi Paratha",
   "ingredients": [
     {
       "name": "Whole Wheat Flour",
       "quantity": "3.0",
       "unit": "cup"
     },
     {
       "name": "Methi leaves",
       "quantity": "1.0",
       "unit": "bunch"
     }
   ]
 },
 {
   "name": "Methi Thepla",
   "ingredients": [
     {
       "name": "Wheat Flour",
       "quantity": "3.0",
       "unit": "cup"
     },
     {
       "name": "Besan (gram flour)",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Yogurt",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Methi leaves (Fenugreek)",
       "quantity": "1.0",
       "unit": "bunch"
     }
   ]
 },
 {
   "name": "Mix Veg Paratha",
   "ingredients": [
     {
       "name": "Potato",
       "quantity": "3.0"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Cauliflower",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Beans",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Peas",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Wheat Flour",
       "quantity": "4.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Mix Veg Vepudu",
   "ingredients": [
     {
       "name": "Potato",
       "quantity": "2.0"
     },
     {
       "name": "Carrot",
       "quantity": "2.0"
     },
     {
       "name": "Green Beans",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Cauliflower",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Okra (optional)",
       "quantity": "5.0"
     }
   ]
 },
 {
   "name": "Mixed Veg Curry",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "0.4",
       "unit": "lb"
     },
     {
       "name": "Potato",
       "quantity": "2.0"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Cauliflower",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Peas",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Mushroom Butter Masala",
   "ingredients": [
     {
       "name": "Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Cashew nuts",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Common Mushrooms",
       "quantity": "1.1",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Butter",
       "quantity": "4.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Mutton Biryani",
   "ingredients": [
     {
       "name": "Onion",
       "quantity": "4.0"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Green Chilli",
       "quantity": "2.0"
     },
     {
       "name": "Mutton",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Lemon",
       "quantity": "1.0"
     },
     {
       "name": "Basmati Rice",
       "quantity": "3.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Mutton Curry",
   "ingredients": [
     {
       "name": "Bone in Mutton",
       "quantity": "2.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "4.0"
     },
     {
       "name": "Tomato",
       "quantity": "4.0"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Mutton Keema Aloo",
   "ingredients": [
     {
       "name": "Ground mutton",
       "quantity": "1.25",
       "unit": "lb"
     },
     {
       "name": "potato",
       "quantity": "4.0"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     }
   ]
 },
 {
   "name": "Mutton Rogan Josh",
   "ingredients": [
     {
       "name": "Mutton (boneless, cubed)",
       "quantity": "2.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "4.0"
     },
     {
       "name": "Plain yogurt",
       "quantity": "1.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Palak Dal",
   "ingredients": [
     {
       "name": "Toor Dal",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Spinach",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Green Chilies",
       "quantity": "3.0"
     }
   ]
 },
 {
   "name": "Palak Paneer",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "0.8",
       "unit": "lb"
     },
     {
       "name": "Spinach",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Palak Pappu",
   "ingredients": [
     {
       "name": "Toor Dal",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Spinach",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Green Chilies",
       "quantity": "3.0"
     }
   ]
 },
 {
   "name": "Paneer Bhurji",
   "ingredients": [
     {
       "name": "Onion",
       "quantity": "3.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Paneer",
       "quantity": "0.7",
       "unit": "lb"
     }
   ]
 },
 {
   "name": "Paneer Butter Masala",
   "ingredients": [
     {
       "name": "Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "4.0"
     },
     {
       "name": "Paneer",
       "quantity": "1.0",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Cashews",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Cooking Oil",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Cilantro (Garnish)",
       "quantity": "4.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Paneer Chilli",
   "ingredients": [
     {
       "name": "Corn Flour",
       "quantity": "0.75",
       "unit": "cup"
     },
     {
       "name": "Plain flour",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Paneer",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Spring Onion",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Paneer Egg Roll",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "0.7",
       "unit": "lb"
     },
     {
       "name": "Eggs",
       "quantity": "6.0"
     },
     {
       "name": "Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Roti",
       "quantity": "8.0"
     }
   ]
 },
 {
   "name": "Paneer Lababdar",
   "ingredients": [
     {
       "name": "Yogurt/ Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Cashew nuts",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Paneer",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Paneer Makhani",
   "ingredients": [
     {
       "name": "Yogurt/ Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Cashew nuts",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Paneer",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Paneer Paratha",
   "ingredients": [
     {
       "name": "Wheat Flour",
       "quantity": "4.0",
       "unit": "cup"
     },
     {
       "name": "Paneer",
       "quantity": "0.6",
       "unit": "lb"
     }
   ]
 },
 {
   "name": "Paneer Tikka",
   "ingredients": [
     {
       "name": "Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Green Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Paneer",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Lemon",
       "quantity": "1.0"
     },
     {
       "name": "Cashews",
       "quantity": "4.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Papdi Chaat",
   "ingredients": [
     {
       "name": "Papdis (Recommend: Haldiram Papdi)",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Potato",
       "quantity": "3.0"
     },
     {
       "name": "Canned Chickpeas",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Whole Milk Yogurt",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Fine Sev",
       "quantity": "1.0",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Patta Gobhi Sabzi",
   "ingredients": [
     {
       "name": "Urad Dal",
       "quantity": "1.5",
       "unit": "tsp"
     },
     {
       "name": "Chana Dal",
       "quantity": "1.5",
       "unit": "tsp"
     },
     {
       "name": "Cabbage",
       "quantity": "1.0",
       "unit": "head"
     },
     {
       "name": "Coconut Shredded (optional)",
       "quantity": "6.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Patta Gobi Mix Veg",
   "ingredients": [
     {
       "name": "Cabbage",
       "quantity": "1.0",
       "unit": "head"
     },
     {
       "name": "Urad Dal",
       "quantity": "2.0",
       "unit": "tsp"
     },
     {
       "name": "Potato (optional)",
       "quantity": "2.0"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Green Peas",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Pav Bhaji",
   "ingredients": [
     {
       "name": "tomato",
       "quantity": "4.0"
     },
     {
       "name": "Cauliflower",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Peas/ Matar",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "potato",
       "quantity": "4.0"
     },
     {
       "name": "Green Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Lemons",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Pepper Chicken",
   "ingredients": [
     {
       "name": "Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Boneless Chicken Thighs",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Pepper Chicken Curry",
   "ingredients": [
     {
       "name": "Yogurt/ Heavy cream",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Boneless Chicken Thighs",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Pongal",
   "ingredients": [
     {
       "name": "Rice (short-grain or Ponni)",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Split yellow mung beans",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Green chilies",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Potato Curry",
   "ingredients": [
     {
       "name": "potato (Aloo)",
       "quantity": "6.0"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Potato Sabzi",
   "ingredients": [
     {
       "name": "potato (Aloo)",
       "quantity": "4.0"
     }
   ]
 },
 {
   "name": "Pulao Raita",
   "ingredients": [
     {
       "name": "Whole milk Yogurt",
       "quantity": "2.5",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "1.0"
     },
     {
       "name": "Cilantro",
       "quantity": "5.0",
       "unit": "tsp"
     },
     {
       "name": "Cucumber",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Punjabi Kadhi Pakode",
   "ingredients": [
     {
       "name": "Besan (Gram Flour)",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Onions",
       "quantity": "4.0"
     }
   ]
 },
 {
   "name": "Rajma",
   "ingredients": [
     {
       "name": "Kidney beans raw, soaked overnight",
       "quantity": "0.7",
       "unit": "lb"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Sambar",
   "ingredients": [
     {
       "name": "Toor Dal",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Green Beans",
       "quantity": "8.0"
     },
     {
       "name": "Drum Sticks",
       "quantity": "3.0"
     },
     {
       "name": "Potato",
       "quantity": "1.0"
     },
     {
       "name": "Urad Dal",
       "quantity": "5.0",
       "unit": "tbsp"
     },
     {
       "name": "Grated Coconut",
       "quantity": "3.0",
       "unit": "tbsp"
     },
     {
       "name": "Green Chilli",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Sarson Ka Saag",
   "ingredients": [
     {
       "name": "Mustard greens (sarson)",
       "quantity": "2.0",
       "unit": "bunches"
     },
     {
       "name": "Spinach leaves",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Green chilies",
       "quantity": "2.0"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "tomato",
       "quantity": "2.0"
     },
     {
       "name": "Cornmeal (makki ka atta) or corn flour",
       "quantity": "2.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Schezwan Chicken",
   "ingredients": [
     {
       "name": "Chicken Breast",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Cornstarch",
       "quantity": "6.0",
       "unit": "tbsp"
     },
     {
       "name": "Red Bell Peppers",
       "quantity": "2.0"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "2.0"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "Spring Onions",
       "quantity": "1.0",
       "unit": "bunch"
     }
   ]
 },
 {
   "name": "Schezwan Fried Rice",
   "ingredients": [
     {
       "name": "Rice (uncooked)",
       "quantity": "0.8",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Cabbage",
       "quantity": "0.5"
     },
     {
       "name": "Spring Onion",
       "quantity": "3.0",
       "unit": "tbsp"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Green Beans",
       "quantity": "5.0"
     },
     {
       "name": "Yellow Bell Pepper",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Schezwan Paneer",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "0.9",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Bell Peppers",
       "quantity": "2.0"
     },
     {
       "name": "Spring Onions",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Cornstarch",
       "quantity": "1.0",
       "unit": "tablespoon"
     }
   ]
 },
 {
   "name": "Semiyan Kheer",
   "ingredients": [
     {
       "name": "Vermicelli",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Whole Milk",
       "quantity": "10.0",
       "unit": "cup"
     },
     {
       "name": "Sugar",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Raisins",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "Cashews",
       "quantity": "15.0"
     }
   ]
 },
 {
   "name": "Shahi Paneer",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "1.1",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Cashew nuts, soaked",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Heavy whipping cream",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Ghee or oil",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "ginger garlic paste",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "Green chili",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Shrimp Curry",
   "ingredients": [
     {
       "name": "Shrimp (tail removed, deveined)",
       "quantity": "2.0",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "ginger garlic paste",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "Green chilies",
       "quantity": "2.0"
     },
     {
       "name": "Cilantro",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Cooking oil",
       "quantity": "3.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Shrimp Masala",
   "ingredients": [
     {
       "name": "Shrimp (tail removed, deveined)",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "ginger garlic paste",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "Green chilies",
       "quantity": "2.0"
     },
     {
       "name": "Cilantro",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Cooking oil",
       "quantity": "3.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Soybeans Sabzi",
   "ingredients": [
     {
       "name": "Dried Soybeans",
       "quantity": "1.5",
       "unit": "cup"
     },
     {
       "name": "Onions",
       "quantity": "2.0"
     },
     {
       "name": "tomato",
       "quantity": "3.0"
     }
   ]
 },
 {
   "name": "Tandoor Chicken",
   "ingredients": [
     {
       "name": "Chicken (whole or pieces)",
       "quantity": "3.0",
       "unit": "lb"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Lemon Juice",
       "quantity": "2.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Thai Basil Noodles",
   "ingredients": [
     {
       "name": "Rice noodles",
       "quantity": "0.75",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Bell peppers",
       "quantity": "3.0"
     },
     {
       "name": "Carrots",
       "quantity": "3.0"
     },
     {
       "name": "Snow peas",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Ground chicken, pork, or tofu",
       "quantity": "0.0",
       "unit": "lb"
     },
     {
       "name": "Eggs",
       "quantity": "3.0"
     },
     {
       "name": "Lime wedges",
       "quantity": "6.0"
     },
     {
       "name": "Chopped peanuts (optional)",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Green onions (optional)",
       "quantity": "1.0"
     },
     {
       "name": "Thai bird's eye chilies",
       "quantity": "6.0"
     }
   ]
 },
 {
   "name": "Thai Rice Noodles",
   "ingredients": [
     {
       "name": "Boneless, skinless Chicken/ Tofu/ Shrimp",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Rice Noodles",
       "quantity": "1.0",
       "unit": "lb"
     },
     {
       "name": "Carrot",
       "quantity": "2.0"
     },
     {
       "name": "Bell Pepper",
       "quantity": "2.0"
     },
     {
       "name": "Green Onions",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Egg",
       "quantity": "1.0"
     }
   ]
 },
 {
   "name": "Tindora Fry",
   "ingredients": [
     {
       "name": "Tindora",
       "quantity": "1.5",
       "unit": "lb"
     }
   ]
 },
 {
   "name": "Tindora Vepudu",
   "ingredients": [
     {
       "name": "Tindora",
       "quantity": "1.5",
       "unit": "lb"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Upma",
   "ingredients": [
     {
       "name": "Rava/ Sooji",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Urad Dal",
       "quantity": "1.0",
       "unit": "tsp"
     },
     {
       "name": "Chana Dal",
       "quantity": "1.0",
       "unit": "tsp"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Green Peas (frozen)",
       "quantity": "4.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Veg Biryani",
   "ingredients": [
     {
       "name": "Onion",
       "quantity": "3.0"
     },
     {
       "name": "Whole milk yogurt",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Green Chilli",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Lemon",
       "quantity": "1.0"
     },
     {
       "name": "Basmati Rice",
       "quantity": "2.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Veg Chilli Garlic Noodles",
   "ingredients": [
     {
       "name": "Rice noodles or Egg Noodles",
       "quantity": "1.1",
       "unit": "lb"
     },
     {
       "name": "Spring Onion",
       "quantity": "1.0",
       "unit": "bunch"
     },
     {
       "name": "Bell Peppers",
       "quantity": "2.0"
     },
     {
       "name": "Carrots",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Veg Dry Sabzi with Paneer",
   "ingredients": [
     {
       "name": "Paneer",
       "quantity": "0.4",
       "unit": "lb"
     },
     {
       "name": "Potato",
       "quantity": "2.0"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Cauliflower",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Peas",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Veg Fried Rice",
   "ingredients": [
     {
       "name": "Basmati Rice",
       "quantity": "3.0",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Spring Onion",
       "quantity": "14.0",
       "unit": "tbsp"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Green Beans",
       "quantity": "10.0"
     },
     {
       "name": "Green Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Green Peas",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Cabbage",
       "quantity": "0.5",
       "unit": "cup"
     }
   ]
 },
 {
   "name": "Veg Handi",
   "ingredients": [
     {
       "name": "Potato",
       "quantity": "2.0"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Green Beans",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Cauliflower",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "2.0"
     },
     {
       "name": "Heavy whipping cream (optional)",
       "quantity": "2.0",
       "unit": "tbsp"
     },
     {
       "name": "Whole Milk Yogurt",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Paneer",
       "quantity": "0.4",
       "unit": "lb"
     }
   ]
 },
 {
   "name": "Veg Korma",
   "ingredients": [
     {
       "name": "Cauliflower",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Paneer",
       "quantity": "0.4",
       "unit": "lb"
     },
     {
       "name": "Cashew nuts",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Green Peas (Frozen)",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Onion",
       "quantity": "1.0"
     },
     {
       "name": "tomato",
       "quantity": "2.0"
     },
     {
       "name": "Whole milk Yogurt",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Heavy whipping cream",
       "quantity": "0.25",
       "unit": "cup"
     },
     {
       "name": "Raisins (optional)",
       "quantity": "0.5",
       "unit": "cup"
     },
     {
       "name": "Cooking Oil",
       "quantity": "2.0",
       "unit": "tbsp"
     }
   ]
 },
 {
   "name": "Veg Manchurian",
   "ingredients": [
     {
       "name": "Cabbage",
       "quantity": "2.0",
       "unit": "cup"
     },
     {
       "name": "Carrot",
       "quantity": "1.0",
       "unit": "cup"
     },
     {
       "name": "Spring Onion",
       "quantity": "10.0",
       "unit": "tbsp"
     },
     {
       "name": "All purpose flour",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Corn Starch",
       "quantity": "4.0",
       "unit": "tbsp"
     },
     {
       "name": "Cauliflower",
       "quantity": "0.2",
       "unit": "lb"
     },
     {
       "name": "Green Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Tomato",
       "quantity": "1.0"
     },
     {
       "name": "Green chili",
       "quantity": "2.0"
     }
   ]
 },
 {
   "name": "Veg Pulao",
   "ingredients": [
     {
       "name": "Onion",
       "quantity": "2.0"
     },
     {
       "name": "Tomato",
       "quantity": "3.0"
     },
     {
       "name": "Green Beans",
       "quantity": "15.0"
     },
     {
       "name": "Green Bell Pepper",
       "quantity": "1.0"
     },
     {
       "name": "Green Peas (Frozen)",
       "quantity": "5.0",
       "unit": "tbsp"
     },
     {
       "name": "Carrot",
       "quantity": "1.0"
     },
     {
       "name": "Potato",
       "quantity": "1.0"
     },
     {
       "name": "Basmati Rice",
       "quantity": "2.5",
       "unit": "cup"
     },
     {
       "name": "Cashew",
       "quantity": "15.0"
     },
     {
       "name": "Ghee",
       "quantity": "5.0",
       "unit": "tbsp"
     }
   ]
 }
]

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Recipe.deleteMany(); // optional: clear existing data
    await Recipe.insertMany(Recipes);
    console.log('Database seeded!');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));