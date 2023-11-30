require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const conectarMongo = require("./src/config/MongooseConfig.js");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);

  conectarMongo();
});
