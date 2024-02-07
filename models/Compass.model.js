const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const compassSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required."],
  },
  compassTitle: {
    type: String,
    required: [true, "Title is required."],
  },
  lastYearInMonths: String,
  lastYearPersonal: String,
  lastYearCareer: String,
  lastYearFriends: String,
  lastYearHobbies: String,
  lastYearPhysical: String,
  lastYearMental: String,
  lastYearHabits: String,
  lastYearsBetterTomorrow: String,
  historyCompasses: { type: Schema.Types.ObjectId, ref: "CompassHistory" },
  futureCompasses: { type: Schema.Types.ObjectId, ref: "CompassFuture" },
});

module.exports = model("Compass", compassSchema);
