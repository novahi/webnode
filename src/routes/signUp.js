import express from 'express'
import signUp from '../app/controllers/SignUpControllers'
const router = express.Router();

router.get('/', signUp.get)
router.post('/', signUp.post)



module.exports = router;
