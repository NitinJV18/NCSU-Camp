// server.js
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const API_KEY = process.env.GEMINI_API_KEY; 

if (!API_KEY) {
    console.error("CRITICAL ERROR: GEMINI_API_KEY environment variable is not set.");
}

const genAI = new GoogleGenerativeAI(API_KEY || "DUMMY_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// HELPER FUNCTION: Helper function to wait/sleep for a given number of milliseconds
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// HELPER FUNCTION: Retries the Gemini call if it hits a 429 rate limit
async function generateContentWithRetry(prompt, maxRetries = 5, delay = 2000) {
    let currentAttempt = 0;
    
    while (currentAttempt < maxRetries) {
        try {
            // Attempt to hit the Gemini API
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text(); // Success! Return the response text.
        } catch (error) {
            currentAttempt++;
            const isRateLimit = error.status === 429 || error.message.includes("429") || error.message.includes("Quota");
            
            if (isRateLimit && currentAttempt < maxRetries) {
                console.warn(`[429 Rate Limit] Attempt ${currentAttempt} failed. Retrying in ${delay / 1000} seconds...`);
                await sleep(delay);
                delay *= 2; // Double the wait time for the next attempt (Exponential Backoff)
            } else {
                // If it's a different error (like 400 Bad Request) or we ran out of retries, throw it
                throw error;
            }
        }
    }
    throw new Error("Max retries exceeded while waiting for Gemini API quota.");
}

// API Endpoint for handling chat prompts
app.post('/api/chat', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) return res.status(400).json({ error: "Missing prompt" });

        if (!API_KEY) {
            return res.status(500).json({ error: "Gemini API Key is missing on the server configuration." });
        }

        // Call our new retry function instead of the raw model directly
        const text = await generateContentWithRetry(prompt);

        res.json({ text });
    } catch (error) {
        console.error("Gemini API Ultimate Failure:", error);
        res.status(500).json({ error: "The server is currently overloaded by rate limits. Please try again in a moment." });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});