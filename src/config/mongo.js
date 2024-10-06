const mongoose = require("mongoose")

require("dotenv").config(/*{path: "./src/.env"}*/);

const connectMONGODB = async ()=> {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo Db conectado.")
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:',error.message);
        process.exit();
    }
}

module.exports = connectMONGODB;