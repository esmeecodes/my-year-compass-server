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
  compassYear: {
    type: Number,
    required: [true, "Compass year is required."],
    unique: [true, "You can only create one compass every year"],
  },
  lastYearInMonths: String,
  pastPersonal: String,
  pastCareer: String,
  pastFriends: String,
  pastHobby: String,
  pastHealth: String,
  pastMental: String,
  pastHabits: String,
  pastBetterTomorrow: String,
  sixSentPast_decision: String,
  sixSentPast_lesson: String,
  sixSentPast_risk: String,
  sixSentPast_surprise: String,
  sixSentPast_impThing: String,
  sixSentPast_completed: String,
  sixQuestPast_proud: String,
  sixQuestPast_influencedme: String,
  sixQuestPast_influencedbyme: String,
  sixQuestPast_notaccomplished: String,
  sixQuestPast_discovered: String,
  sixQuestPast_grateful: String,
  theBestMoments: String,
  threeBigAcc_list: String,
  threeBigAcc_achieved: String,
  threeBigChall_list: String,
  threeBigChall_overcome: String,
  threeBigChall_learn: String,
  forgiveness: String,
  lettingGo: String,
  wordsPast: String,
  bookPast: String,
  goodbyePast: String,
});

module.exports = model("Compass", compassSchema);
