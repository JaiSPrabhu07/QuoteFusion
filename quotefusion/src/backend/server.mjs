import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let quotes = [
    { id: 1, text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { id: 2, text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
];

// Get a random quote
app.get("/api/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

// Submit a new quote
app.post("/api/submit", (req, res) => {
    const { text, author } = req.body;
    if (!text || !author) {
        return res.status(400).json({ error: "Text and author are required" });
    }
    const newQuote = { id: quotes.length + 1, text, author };
    quotes.push(newQuote);
    res.status(201).json(newQuote);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
