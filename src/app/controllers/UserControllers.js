const User = require('../models/User')
class UserController {
  // [Get] /users/:slug
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
  // [Get] /users
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

  // [Get] /user/:id/edit 
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
  // [Put] /user/:id 
  async update(req, res, next) {
    try {
      const formData = req.body
      formData.image  = `https://graph.facebook.com/${req.body.facebook.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.TOKEN_FB}`
      const data = await User.updateOne({
        _id: req.params.id
      }, formData)
      return res.redirect('/users')
    } catch (e) {
      next()
    }
  }
  // [Delete] /user/:id
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