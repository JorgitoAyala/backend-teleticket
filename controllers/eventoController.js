const Evento = require("../models/Evento");

exports.crearEvento = async (req, res) => {
  try {
    let evento = new Evento(req.body);
    await evento.save();
    res.send(evento);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.json(eventos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarEvento = async (req, res) => {
  try {
    const { evento, ubicacion, categoria, descripcion, precio, imagen } =
      req.body;

    let unEvento = await Evento.findById(req.params.id);
    if (!unEvento) {
      res.status(404).json({ msg: "No existe el evento!" });
    }

    unEvento.evento = evento;
    unEvento.ubicacion = ubicacion;
    unEvento.categoria = categoria;
    unEvento.descripcion = descripcion;
    unEvento.precio = precio;
    unEvento.imagen = imagen;

    unEvento = await Evento.findOneAndUpdate({ _id: req.params.id }, unEvento, {
      new: true,
    });

    res.json(unEvento);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerEvento = async (req, res) => {
  try {
    let unEvento = await Evento.findById(req.params.id);
    if (!unEvento) {
      res.status(404).json({ msg: "No existe el evento!" });
    }
    res.json(unEvento);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarEvento = async (req, res) => {
  try {
    let unEvento = await Evento.findById(req.params.id);
    if (!unEvento) {
      res.status(404).json({ msg: "No existe el evento!" });
    }

    await Evento.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Evento eliminado con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
