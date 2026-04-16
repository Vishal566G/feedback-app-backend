const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

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
