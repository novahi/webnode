import express from 'express'
import newsController from '../app/controllers/NewsControllers'
const router = express.Router()

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
