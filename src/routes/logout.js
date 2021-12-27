const express = require('express');
const Middleware = require('../app/controllers/MiddlewareController');
const logout = require('../app/controllers/LogoutControllers');
const router = express.Router();

router.get('/', logout.get)


module.exports = router;
 