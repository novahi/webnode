const express = require('express')
const signUp = require('../app/controllers/SignUpControllers')
const router = express.Router();

router.get('/', signUp.get)
router.post('/', signUp.post)



module.exports = router;
