const express = require("express");
const connnectDB = require("./config/db");
const cors = require("cors");

//Creamos el servidor
const app = express();

//Conectamos a la BD
connnectDB();

//Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/eventos", require("./routes/evento"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("El servidor está corriendo perfectamente");
});
