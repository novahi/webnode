const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

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
    const formData = req.body
    try {
    const accessToken = req.cookies.accessToken;
    if(!accessToken) {
      return res.json("Please login to perform the task")
    }
    const objId = jwt.verify(accessToken,process.env.JWT_ACCESS_KEY) 
    const id = objId.id
    if(id ==  req.params.id) {
      const formData = req.body
      formData.image  = `https://graph.facebook.com/${req.body.facebook.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.TOKEN_FB}`
      const data = await User.updateOne({
        _id: id
      }, formData)
      return res.redirect('/users')
   } else { res.status(404).json("can't do it because you don't have permission")}
    } catch (e) {
      next()
    }
  }
  // [Delete] /user/:id
  async destroy(req, res, next) {
    try {
      const accessToken = req.cookies.accessToken;
      if (!accessToken) {
        return res.json("Please login to perform the task")
      }
      const objId = jwt.verify(accessToken, process.env.JWT_ACCESS_KEY)
      const id = objId.id
      if(id === req.params.id) {
      const deleteUser = await User.deleteOne({
        _id: id
      })
      const deleteAccount = await Account.deleteOne({id})
      return res.redirect('back')
      } else { res.status(404).json("can't do it because you don't have permission")}
    } catch (e) {
      next()
    }
  }
}

module.exports = new UserController()
