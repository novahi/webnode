
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
        formData.image = `https://graph.facebook.com/${req.body.facebook.trim()}/picture?height=1000&width=1000&ftype=large&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`
        const newUser = new User(formData);
        newUser
            .save()
            .then(() => res.redirect('/users'))
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
    destroy (req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
}
}

module.exports = new UserController();
