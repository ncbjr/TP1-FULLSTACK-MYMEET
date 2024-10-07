const jwt = require('jsonwebtoken');

function initializeSocket(io) {
    io.on("connection", (socket) => {
        const token = socket.handshake.query.token;
        
        if (!token) {
            return socket.disconnect(true); // Desconecta se não houver token
        }
    
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('Erro ao verificar token:', err.message);
                return socket.disconnect(true); // Desconecta se o token for inválido
            }
            
            // Armazene as informações do usuário com o socket
            socket.user = decoded; // Assegure-se de que as informações necessárias do usuário estão adicionadas ao token JWT
    
            console.log(`Usuário ${socket.user.name} conectado com socket ID: ${socket.id}`);
    
            socket.on("join-room", (roomId) => {
                socket.join(roomId);
                io.to(roomId).emit('broadcast', `Usuário ${socket.user.name} entrou na sala.`);
                console.log(`Usuário ${socket.user.name} entrou na sala: ${roomId}`);
            });
    
            socket.on("disconnect", () => {
                console.log(`Usuário ${socket.user.name} desconectado`);
            });
        });
});
}

module.exports = { initializeSocket };