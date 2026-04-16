const express = require("express");
const feedRouter = express.Router();
const Feedback = require("../models/Feedback");

// Create a new feedback
router.post("/", async (req, res) => {
  try {
    const { name, feedback } = req.body;

    if (!name || !feedback) {
      return res
        .status(400)
        .json({ message: "Name and feedback are required." });
    }

    const newFeedback = await Feedback.create({ name, feedback });
    res.status(201).json({ success: true, data: newFeedback });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = feedRouter;
