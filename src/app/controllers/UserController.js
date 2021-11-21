const User = require('../models/User');

class UserController {
    show(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .lean()
            .then((data) => res.render('user', { data }))
            .catch(next);
    }
    create(req, res, next) {
        res.render('create');
    }
    store(req, res, next) {
        const formData = req.body;
        const newUser = new User(formData);
        newUser
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => res.send(err));
    }
}

module.exports = new UserController();
