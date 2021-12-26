const { MongoosesToObject } = require('../../util/mongoose');
const User = require('../models/User');

class SiteController {
  // [Get] home page
    home(req, res, next) {
        res.render('home');
    }
    // [Get] /search
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SiteController();
