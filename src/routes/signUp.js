const express = require('express');
const router = express.Router();

const signUp  = require('../app/controllers/SignUpControllers');

router.get('/', signUp.get)
router.post('/', signUp.post)



module.exports = router;
