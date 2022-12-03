const mongoose = require("mongoose");

const EventoSchema = mongoose.Schema({
  evento: { type: String, required: true },
  ubicacion: { type: String, required: true },
  categoria: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen: { type: String, required: true },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Evento", EventoSchema);
