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
}

module.exports = new RoomController();