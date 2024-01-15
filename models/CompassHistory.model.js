const { Schema, model } = require("mongoose");

const compassHistorySchema = new Schema(
  {
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
    pastYearPersonal: String,
    pastYearCareer: String,
    pastYearFriends: String,
    pastYearHobbies: String,
    pastYearHealth: String,
    pastYearMentalHealth: String,
    pastYearHabits: String,
    pastYearABetterTomorrow: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const CompassHistory = model("CompassHistory", compassHistorySchema);

module.exports = CompassHistory;
