const {Router} = require('express');
const {
    historical
} = require('../controllers/historical.controller.js');

const router = Router();

router.get('/:coin/:amount/:date', historical);

module.exports = router;