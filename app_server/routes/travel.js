const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET HOMEPAGE */
router.get('/', controller.travel);

module.exports = router;