const { MongoosesToObject } = require('../../util/mongoose');
const User = require('../models/User');

class SiteController {
    home(req, res, next) {
        res.render('home');
    }

    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SiteController();
