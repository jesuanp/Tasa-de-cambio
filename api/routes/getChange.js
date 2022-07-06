const {Router} = require('express');
const {
    getChangeController
} = require('../controllers/getChange.controller.js');

const router = Router();

router.get('/:coin/:amount', getChangeController);

module.exports = router;
