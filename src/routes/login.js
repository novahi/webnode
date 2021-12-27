import express from 'express');
import Middleware from '../app/controllers/MiddlewareController');
import login from '../app/controllers/LoginControllers');
const router = express.Router();

router.get('/', login.get)
router.post('/', login.post)


module.exports = router;
 