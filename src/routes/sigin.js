const express = require('express');
const router = express.Router();

const authentication  = require('../app/controllers/SiginController');

router.get('/', authentication.sigin)
router.post('/', authentication.validatorSigin)


module.exports = router;
 