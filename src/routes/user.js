const express = require('express')
const userController = require('../app/controllers/UserControllers')
const Middleware = require('../app/controllers/MiddlewareControllers');
const router = express.Router();

router.get('/',Middleware.check,userController.view);
router.get('/:id/edit',Middleware.check,  userController.edit)
router.put('/:id',Middleware.check, userController.update)
router.delete('/:id', Middleware.check,userController.destroy)
router.get('/:slug',Middleware.check, userController.show);

module.exports = router;
