const express = require('express');
const router = express.Router();

const authentication  = require('../app/controllers/LoginController');

router.get('/', authentication.login)
router.post('/', authentication.validatorLogin)



module.exports = router;
