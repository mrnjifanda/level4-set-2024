const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScheduleSchema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, required: true },
    time: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Schedule", ScheduleSchema);
