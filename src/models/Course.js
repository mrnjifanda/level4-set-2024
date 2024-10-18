const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", CourseSchema);
