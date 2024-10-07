const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require('socket.io');
const { initializeSocket } = require("./services/SocketService");
const cookieParser = require('cookie-parser');
const connectMongo = require("./config/mongo");
const ejs = require('ejs');

const userRoutes = require("./routes/UserRoutes");
const roomRoutes = require("./routes/RoomRoutes");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(cookieParser()); 

app.use(userRoutes);
app.use(roomRoutes);

connectMongo();

/*app.get("/", (request, response)=>{
    response.send({message: "Hello word"})
});*/


initializeSocket(io);

server.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000.")
});
