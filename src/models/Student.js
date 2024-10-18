const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    enrollmentDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", StudentSchema);
