const jwt = require('jsonwebtoken');
const userMiddleware = require('../middlewares/userMid');

function initializeSocket(io) {
    io.use((socket, next) => {
        const token = socket.handshake.query.token;

        if (!token) {
            return next(new Error('Acesso negado. Nenhum token fornecido.'));
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return next(new Error('Token inválido.'));
            }
            socket.user = decoded;
            next();
        });
    });

    io.on("connection", (socket) => {
        console.log(`Usuário ${socket.user.name} conectado com socket ID: ${socket.id}`);

        socket.on("join-room", (roomId) => {
            socket.join(roomId);
            io.to(roomId).emit('broadcast', `Usuário ${socket.user.name} entrou na sala.`);
        });

        socket.on("signal", (data) => {
            const { roomId, signal } = data;
            socket.to(roomId).emit("signal", signal);
        });

        socket.on("disconnect", () => {
            console.log(`Usuário ${socket.user.name} desconectado`);
        });
    });
}

module.exports = { initializeSocket };