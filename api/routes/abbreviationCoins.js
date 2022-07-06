const {Router} = require('express');
const {
    abbreviationCoins
} = require('../controllers/abbreviationCoins.controller.js');

const router = Router();

router.get('/', abbreviationCoins);

module.exports = router;