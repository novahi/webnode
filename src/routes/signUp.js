const express = require('express');
const router = express.Router();

const login  = require('../app/controllers/LoginControllers');

router.get('/', login.get)
router.post('/', login.post)



module.exports = router;
