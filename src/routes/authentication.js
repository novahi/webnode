const express = require('express');
const router = express.Router();

const authenticationController = require('../app/controllers/NewsController');

router.post('/login', authenticationController.login);
router.post('/sigin', authenticationController.sigin);

module.exports = router;
