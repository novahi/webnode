const express = require('express');
const router = express.Router();

const authenticationController = require('../app/controllers/AuthenticationController');

router.post('/login', authenticationController.login);
router.post('/sigin', authenticationController.sigin);

module.exports = router;
