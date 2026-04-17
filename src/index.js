const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const cors = require("cors");
const feedbackRoutes = require("./routes/feedback");

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://feedback-app-frontend-theta.vercel.app/",
      "https://feedback-app-frontend-git-main-vishals-projects-b5051232.vercel.app/",
      "https://feedback-app-frontend-3bylzbclw-vishals-projects-b5051232.vercel.app/",
    ],
  }),
);
app.use(express.json());

// Routes
app.use("/feedback", feedbackRoutes);

// connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
