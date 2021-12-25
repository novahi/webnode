const express = require('express');
const router = express.Router();

const login  = require('../app/controllers/SignUpControllers');

router.get('/', login.get)
router.post('/', login.post, login.create)



module.exports = router;
