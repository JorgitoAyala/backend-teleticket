const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const connnectDB = async () => {
  try {
    mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("BD Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connnectDB;
