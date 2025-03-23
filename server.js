const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const DEFAULT_PORT = 2000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For parsing form submissions
app.use(express.static(path.join(__dirname, "public")));

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/skillswap", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
  });

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skillsOffered: { type: [String], required: true },
  skillsWanted: { type: [String], required: true },
  bio: { type: String, default: "" },
});

const User = mongoose.model("User", userSchema);

// Routes

// Create a new user
app.post("/api/users", async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, skillsOffered, skillsWanted, bio } = req.body;

    // Validate required fields
    if (!name || !email || !skillsOffered || !skillsWanted) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    // Create a new user instance
    const user = new User({
      name,
      email,
      skillsOffered: skillsOffered.split(",").map((skill) => skill.trim()),
      skillsWanted: skillsWanted.split(",").map((skill) => skill.trim()),
      bio,
    });

    // Save the user to the database
    const savedUser = await user.save();
    res.status(201).json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Serve the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server
app.listen(DEFAULT_PORT, () => {
  console.log(`Server is running on http://localhost:${DEFAULT_PORT}`);
});
