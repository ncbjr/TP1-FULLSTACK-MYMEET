const express = require("express");
const http = require("http");
const { initializeSocket } = require("./services/socketService");
const cookieParser = require('cookie-parser');
const connectMongo = require("./config/mongo");

const userRoutes = require("./routes/UserRoutes");
const roomRoutes = require("./routes/RoomRoutes");


const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cookieParser());  // Adiciona o middleware de cookies

app.use(userRoutes);
app.use(roomRoutes);

connectMongo();

/*app.get("/", (request, response)=>{
    response.send({message: "Hello word"})
});*/

initializeSocket(server);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000.")
});




//server.js
//mongo.js
//server.js
//UserRoutes.js
//UserControllers.js