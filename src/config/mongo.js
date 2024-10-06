const mongoose = require("mongoose")

require("dotenv").config(/*{path: "./src/.env"}*/);

const connectMONGODB = async ()=> {
    try {
        mongoose.connectMONGODB(process.env.MONGO_URI, {
            useNewUrlParser: true,
            userUnifieldTopology: true
        });
        console.log("Mongo Db conectado.")
    } catch {
        console.error(error.message);
        process.exit();
    }
}

module.exports = connectMONGODB;