const User = require('../models/User')
class UserController {
  async show(req, res, next) {
    try {
      const data = await User.findOne({
        slug: req.params.slug
      }).lean()

      return res.render('viewuser', {
        data
      })

    } catch (e) {
      next()
    }
  }
  async create(req, res, next) {
    return await res.render('create')
  }
  async view(req, res, next) {
    try {
      const data = await User.find({}).lean()
      return res.render('user', {
        data
      })
    } catch (e) {
      next()
    }
  }
  async store(req, res, next) {
    try {
      const formData = await req.body
      formData.image = `https://graph.facebook.com/${req.body.facebook.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.TOKEN_FB}`
      const newUser = await new User(formData)
      const data = await newUser.save()
      return res.redirect('/users')


    } catch (e) {
      next()
    }
  }
  async edit(req, res, next) {
    try {
      const data = await User.findById(req.params.id).lean()
      return res.render('edit', {
        data
      })
    } catch (e) {
      next()
    }
  }
  async update(req, res, next) {
    try {
      const data = await User.updateOne({
        _id: req.params.id
      }, req.body)
      return res.redirect('/users')
    } catch (e) {
      next()
    }
  }
  async destroy(req, res, next) {
    try {
      const data = await User.deleteOne({
        _id: req.params.id
      })
      return res.redirect('back')
    } catch (e) {
      next()
    }
  }
}

module.exports = new UserController()