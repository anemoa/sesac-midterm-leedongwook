const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

router.get('/', controller.index);

module.exports = router;