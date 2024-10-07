const { Router } = require('express');
const RoomController = require('../controllers/RoomController');
const userMiddleware = require('../middlewares/userMid');

const router = Router();

router.post('/api/rooms', userMiddleware, RoomController.createRoom);
router.get('/api/rooms', userMiddleware, RoomController.listRooms);
router.post('/api/rooms/join', userMiddleware, RoomController.joinRoom);

module.exports = router;