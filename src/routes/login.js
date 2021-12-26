const express = require('express');
const router = express.Router();
const Middleware = require('../app/controllers/MiddlewareControllers');
const login = require('../app/controllers/LoginControllers');


router.get('/', login.get)
router.post('/', login.post)


module.exports = router;
 