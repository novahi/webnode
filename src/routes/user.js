const express = require('express')
const userController = require('../app/controllers/UserControllers')
const Middleware = require('../app/controllers/MiddlewareController');
const router = express.Router();

router.get('/',Middleware.checkLogin,userController.view);
router.get('/:id/edit', Middleware.checkLogin, userController.edit)
router.put('/:id',Middleware.checkLogin, userController.update)
router.delete('/:id',Middleware.checkLogin, userController.destroy)
router.get('/:slug', Middleware.checkLogin, userController.show);

module.exports = router;
