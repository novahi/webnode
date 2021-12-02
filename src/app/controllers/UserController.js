const User = require('../models/User');

class UserController {
    show(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .lean()
            .then((user) => res.render('viewuser', { user }))
            .catch(next);
    }
    create(req, res, next) {
        res.render('create');
    }
    view(req, res, next) {
        User.find({})
            .lean()
            .then((data) => res.render('user', { data }))
            .catch(next);
    }
    store(req, res, next) {
        const formData = req.body;
        const newUser = new User(formData);
        newUser
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => res.send(err));
    }
    edit (req, res, next) {
        User.findById(req.params.id)
            .lean()
            .then(data => res.render('edit', {data}))
            .catch(next)
    }
    update(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(data => res.redirect('/users'))
    }
}

module.exports = new UserController();
