const controller = require('../controller/indexController');
const express = require('express');
const router = express.Router();

router.get('/', controller);

module.exports = router;