import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors()); 
app.use(express.json()); 

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


mongoose
  .connect("mongodb://localhost:27017/mern-auth", { })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);

const PORT =  5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
