
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const complaintRoutes = require("./routes/complaints");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "HostelCare backend is running!" });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "HostelCare API is working",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "API endpoint not found." });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://127.0.0.1:27017/hostel_complaints"
  )
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
