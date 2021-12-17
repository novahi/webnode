const express = require('express');
const router = express.Router();

const authentication  = require('../app/controllers/AuthenticationController');

router.get('/login', authentication.login)
router.post('/login', authentication.validatorLogin)
router.get('/sigin', authentication.sigin)
router.post('/sigin', authentication.validatorSigin)


module.exports = router;
