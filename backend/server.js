import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route for testing
app.get("/", (req, res) => {
    res.send("<h1>Welcome to AutoInspectors API</h1><p>The server is running successfully. </p>");
    console.log("VITE_HELCIM_API_TOKEN:", process.env.VITE_HELCIM_API_TOKEN);

});

// Example API endpoint
app.post("/api/payment", async (req, res) => {
    try {
        // Example response for payment processing
        res.status(200).json({ message: "Payment processed successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Payment processing failed" });
    }
});

// Port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
