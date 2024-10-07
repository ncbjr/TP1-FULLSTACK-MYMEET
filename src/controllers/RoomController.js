const Room = require('../models/RoomModel');

class RoomController {
    async createRoom(req, res) {
        try {
            const { name, description, capacity } = req.body;

            const room = new Room({
                name,
                description,
                capacity
            });

            await room.save();
            res.status(201).json(room);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async listRooms(req, res) {
        try {
            const rooms = await Room.find();
            res.status(200).json(rooms);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
 
    async joinRoom(req, res) {
        try {
            const { roomId } = req.body;
            const room = await Room.findById(roomId);
            if (!room) {
                return res.status(404).json({ message: 'Sala não encontrada' });
            }
            // Lógica para adicionar usuários à sala, se necessário
            res.status(200).json({ message: `Entrou na sala ${roomId}` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new RoomController();