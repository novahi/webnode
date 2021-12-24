const express = require('express');
const router = express.Router();

const authentication  = require('../app/controllers/SiginControllers');

router.get('/', authentication.sigin)
router.post('/', authentication.validatorSigin)


module.exports = router;
 