const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  club: {
    type: String,
    required: true,
  },
  encargado: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Team", teamSchema);
