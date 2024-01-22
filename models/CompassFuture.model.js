const { Schema, model } = require("mongoose");

const compassFutureSchema = new Schema({
  compass: { type: Schema.Types.ObjectId, ref: "Compass" },
  compassHistory: { type: Schema.Types.ObjectId, ref: "CompassHistory" },
  futureYear: {
    type: Number,
  },
  dreamsNextYear: {
    type: String,
  },
});

const compassFuture = model("CompassFuture", compassFutureSchema);

module.exports = compassFuture;
