const mongoose = require("mongoose");
const { Schema } = mongoose;

const EnrollmentSchema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, required: true },
    studentId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
