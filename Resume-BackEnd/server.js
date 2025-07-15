// Resume-BackEnd/server.js
import express from "express";
import cors from "cors";
import { saveToDatabase } from "./saveData.js";
import { fetchFromDatabase } from "./saveData.js"; // Import the function to get data

const app = express();
// With this:
app.use(cors());
app.use(express.json()); // IMPORTANT: Must be before route
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
app.listen(5001, () => {
  console.log("🚀 Server of maibu running on http://localhost:5001");
});
