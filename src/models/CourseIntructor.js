const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseIntructor = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, required: true },
    instructorId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CourseIntructor", CourseIntructor);
