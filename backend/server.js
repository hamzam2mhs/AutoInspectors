import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(bodyParser.json());

// POST route for handling inspection form data
app.post("/api/inspections", (req, res) => {
  const formData = req.body;
  console.log("Form data received:", formData);

  // Here you can add logic to store the form data in a database
  res.json({ message: "Inspection data received successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
