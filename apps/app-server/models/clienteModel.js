const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nombresCompletos: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  fechadeNacimiento: {
    type: String,
    required: true,
  },
  celular: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Cliente", clienteSchema);
