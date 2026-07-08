// server.js
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path');
const fs = require('fs');
require('dotenv').config(); // Loads variables from .env file when running locally

const app = express();
const port = process.env.PORT || 3000;

// Grabs the key from the server environment securely
const API_KEY = process.env.GEMINI_API_KEY; 

if (!API_KEY) {
    console.error("CRITICAL ERROR: GEMINI_API_KEY environment variable is not set.");
}

const genAI = new GoogleGenerativeAI(API_KEY || "DUMMY_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Middlewares
app.use(express.json());

// Serve static files from the 'public' folder
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Debug logs to diagnose the "Not Found" issue on Render
console.log("--- SERVER DIAGNOSTICS ---");
console.log("Current Directory (__dirname):", __dirname);
try {
    console.log("Files at Root:", fs.readdirSync(__dirname));
    if (fs.existsSync(publicPath)) {
        console.log("Files inside 'public':", fs.readdirSync(publicPath));
    } else {
        console.log("WARNING: 'public' folder does not exist at path:", publicPath);
    }
} catch (err) {
    console.error("Failed to read directories during diagnostics:", err);
}
console.log("--------------------------");

// API Endpoint for handling chat prompts
app.post('/api/chat', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) return res.status(400).json({ error: "Missing prompt" });

        if (!API_KEY) {
            return res.status(500).json({ error: "Gemini API Key is missing on the server configuration." });
        }

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ text });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Failed to fetch response from Wolfpack AI." });
    }
});

// Fallback: Catch-all route to serve index.html for any navigation requests
app.get('*', (req, res) => {
    const indexPath = path.join(publicPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send(`Not Found: index.html could not be located on the server at ${indexPath}`);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});