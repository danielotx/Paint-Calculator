const express = require('express');
const router = express.Router();

const paintController = require('../controllers/paint');

router.post('/calculate', paintController.calculate);

module.exports = router;
