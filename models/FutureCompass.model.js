const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const futureCompassSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required."],
  },
  compassTitle: {
    type: String,
    required: [true, "Title is required."],
  },

  bookPast: String,
  goodbyePast: String,
});

module.exports = model("FutureCompass", futureCompassSchema);
