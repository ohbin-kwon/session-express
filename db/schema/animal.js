const mongoose = require("mongoose");
// const { Schema, model } = require('mongoose');

const animalSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model("Animal", animalSchema);