const express = require('express');
const router = express.Router();

const signIn  = require('../app/controllers/SignInControllers');

router.get('/', signIn.get)
router.post('/', signIn.post)


module.exports = router;
 