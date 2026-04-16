const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
      lowercase: true,
    },
    feedback: {
      type: String,
      required: [true, "Feedback text is required"],
      trim: true,
      minlength: [10, "Feedback must be at least 10 characters"],
      maxlength: [1000, "Feedback cannot exceed 1000 characters"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Feedback", feedbackSchema);
