const express = require('express');
const Middleware = require('../app/controllers/MiddlewareControllers');
const logout = require('../app/controllers/LogoutControllers');
const router = express.Router();

router.get('/',Middleware.check, logout.get)


module.exports = router;
 