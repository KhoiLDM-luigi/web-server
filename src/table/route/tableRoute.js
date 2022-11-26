const controller = require('../controller/tableController');
const express = require('express');
const router = express.Router();

router.get('/', controller);

module.exports = router;