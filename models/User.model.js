const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  username: {
    type: String,
    required: [true, "Username is required."],
  },
  compasses: [{ type: Schema.Types.ObjectId, ref: "Compass" }],
  futureCompasses: [{ type: Schema.Types.ObjectId, ref: "FutureCompass" }],
});

module.exports = model("User", userSchema);
