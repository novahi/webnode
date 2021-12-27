const express = require('express')
const userController = require('../app/controllers/UserControllers')
const router = express.Router();

router.get('/', userController.view);
router.get('/:id/edit',userController.edit)
router.put('/:id', userController.update)
router.delete('/:id', userController.destroy)
router.get('/:slug', userController.show);

module.exports = router;
