const { Schema, model } = require("mongoose");

const compassHistorySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  historyTitle: {
    type: String,
    required: [true, "Title is required."],
    unique: true,
  },
  lastYear: {
    type: Number,
    required: [true, "Year is required."],
    unique: true,
  },
  lastYearsHappenings: String,
});

module.exports = model("CompassHistory", compassHistorySchema);
