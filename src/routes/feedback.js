const express = require("express");
const feedRouter = express.Router();
const Feedback = require("../models/Feedback");

// Create a new feedback
feedRouter.post("/", async (req, res) => {
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

// get all feedbacks
feedRouter.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const feedbacks = await Feedback.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = feedRouter;
