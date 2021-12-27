import express from 'express'
import SiteController from '../app/controllers/SiteControllers'
const router = express.Router()

router.get('/search', SiteController.search);
router.get('/', SiteController.home);

module.exports = router;
