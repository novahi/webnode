const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/', userController.view);
router.get('/create', userController.create);
router.post('/store', userController.store);
router.get('/:slug', userController.show);

module.exports = router;
