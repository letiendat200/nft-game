const router = require('express').Router();
const gameController = require('../controllers/gameController');

router.post('/reward', gameController.executeReward)

module.exports = router;
