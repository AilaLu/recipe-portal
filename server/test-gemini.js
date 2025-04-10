// server/test-gemini.js
import pkg from '@google-ai/generativelanguage';
import dotenv from 'dotenv';
dotenv.config();

const { GenerativeModel, GoogleGenerativeAI } = pkg;

if (GoogleGenerativeAI) {
  console.log('GoogleGenerativeAI imported successfully (via default import).');
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log('GoogleGenerativeAI instance created.');
  } catch (error) {
    console.error('Error creating GoogleGenerativeAI instance:', error);
  }
} else {
  console.error('GoogleGenerativeAI not found (via default import).');
}