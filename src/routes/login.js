const express = require('express');
const Middleware = require('../app/controllers/MiddlewareController');
const login = require('../app/controllers/LoginControllers');
const router = express.Router();

router.get('/', login.get)
router.post('/', login.post)


module.exports = router;
 