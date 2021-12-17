const express = require('express');
const router = express.Router();

const authentication  = require('../app/controllers/AuthenticationController');

router.get('/', authentication.login)
router.post('/', authentication.validatorLogin)



module.exports = router;