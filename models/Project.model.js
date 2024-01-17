// models/Project.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: String,
  description: String,
  // owner will be added later on
});

module.exports = model("Project", projectSchema);
