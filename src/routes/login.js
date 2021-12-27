const express = require('express');
const Middleware = require('../app/controllers/MiddlewareControllers');
const login = require('../app/controllers/LoginControllers');
const router = express.Router();

router.get('/', login.get)
router.post('/', login.post)


module.exports = router;
 