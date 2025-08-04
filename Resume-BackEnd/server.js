// Resume-BackEnd/server.js
import express from "express";
import cors from "cors";
import { saveToDatabase } from "./saveData.js";
import { fetchFromDatabase } from "./saveData.js"; // Import the function to get data

import { validateLogin } from "./utils/login.js"; // Import the login validation function

import emailRoutes from "./utils/sendEmail.js"; // Import the email routes

const app = express();
// With this:
app.use(cors());
app.use(express.json({ limit: "10mb" })); // or even "20mb"
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(emailRoutes);
app.post("/save-data", async (req, res) => {
  try {
    await saveToDatabase(req.body);
    res.status(200).json({ message: "Saved successfully" });
  } catch (err) {
    if (err.message === "DUPLICATE_ENTRY") {
      res.status(409).json({ message: "⚠️ Data already exists in database" });
    } else {
      res.status(500).json({ message: "❌ Failed to save data" });
    }
  }
});
app.get("/get-data", async (req, res) => {
  try {
    const data = await fetchFromDatabase();
    console.log("Fetched data:", data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "❌ Failed to retrieve data" });
  }
});

// /added this feature on 07/27/2025 login api

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await validateLogin(email, password);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(401).json(result);
  }
});

app.listen(5001, () => {
  console.log("🚀 Server of maibu running on http://localhost:5001");
});
