const { MongoosesToObject } = require('../../util/mongoose');
const User = require('../models/User');

class SiteController {
    home(req, res, next) {
        // res.render('home')
        User.find({})
            .lean()
            .then((user) => {
                res.render('home', {
                    user,
                });
            })
            .catch(next);
    }

    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SiteController();
