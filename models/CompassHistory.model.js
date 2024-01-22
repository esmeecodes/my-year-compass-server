const { Schema, model } = require("mongoose");

const compassHistorySchema = new Schema({
  compass: { type: Schema.Types.ObjectId, ref: "Compass" },
  compassFuture: [{ type: Schema.Types.ObjectId, ref: "CompassFuture" }],
  pastYear: {
    type: Number,
    required: [true, "Year is required."],
  },
  lastYearsHappenings: String,
});

module.exports = model("CompassHistory", compassHistorySchema);
