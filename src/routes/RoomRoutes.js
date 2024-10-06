const { Router } = require('express');
const RoomController = require('../controllers/RoomController');
const userMiddleware = require('../middlewares/userMid');

const router = Router();

router.post('/api/rooms', userMiddleware, RoomController.createRoom);

module.exports = router;