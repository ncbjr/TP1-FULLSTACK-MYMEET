const socketIo = require('socket.io');

function initializeSocket(server) {
    const io = socketIo(server);

    io.on("connection", (socket) => {
        console.log("Novo cliente conectado");

        socket.on("joinRoom", (roomId) => {
            socket.join(roomId);
            console.log(`Usuário entrou na sala: ${roomId}`);
        });

        // Evento para um usuário entrar em uma sala
        socket.on("join-room", (roomId) => {
            socket.join(roomId);
            io.to(roomId).emit('broadcast', `Usuário entrou na sala: ${roomId}`);
        });

        // Evento para transmissão de sinal
        socket.on("signal", (data) => {
            const { roomId, signal } = data;
            socket.to(roomId).emit("signal", signal);
        });

        
        socket.on("disconnect", () => {
            console.log("Cliente desconectado");
        });
    });
}

module.exports = { initializeSocket };