const express = require("express");
const cookieParser = require('cookie-parser');
const connectMongo = require("./config/mongo");

const userRoutes = require("./routes/UserRoutes");
const roomRoutes = require("./routes/RoomRoutes");


const app = express();
app.use(express.json());
app.use(cookieParser());  // Adiciona o middleware de cookies

app.use(userRoutes);
app.use(roomRoutes);

connectMongo();

/*app.get("/", (request, response)=>{
    response.send({message: "Hello word"})
});*/

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000.")
});




//server.js
//mongo.js
//server.js
//UserRoutes.js
//UserControllers.js