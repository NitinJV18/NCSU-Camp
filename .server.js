// server.js
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path');
require('dotenv').config(); // Loads variables from .env file when running locally

const app = express();
const port = process.env.PORT || 3000;

// Grabs the key from the server environment securely
const API_KEY = process.env.GEMINI_API_KEY; 

if (!API_KEY) {
    console.error("CRITICAL ERROR: GEMINI_API_KEY environment variable is not set.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(express.json());
app.use(express.static('public'));

app.post('/api/chat', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) return res.status(400).json({ error: "Missing prompt" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ text });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Failed to fetch response from Wolfpack AI." });
    }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});