const { Schema, model } = require("mongoose");

const compassFutureSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    futureTitle: {
      type: String,
      required: [true, "Title is required."],
      unique: true,
    },
    futureYear: {
      type: Number,
      required: [true, "Year is required."],
      unique: true,
    },
    dreamsNextYear: {
      type: String,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const compassFuture = model("CompassFuture", compassFutureSchema);

module.exports = compassFuture;
