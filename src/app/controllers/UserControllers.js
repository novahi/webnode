const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class UserController {
  // [Get] /users/:slug
  async show(req, res, next) {
    try {
      const id = req.userId
      const findData = Promise.all([User.findOne({
        slug: req.params.slug
      }).lean(),User.findOne({_id: id}).lean()])
      const [data, user] = findData
      return res.render('viewuser', {
        data,user
      })

    } catch (e) {
      next()
    }
  }
  // [Get] /users
  async view(req, res, next) {
    try {
      const id = req.userId
      const findData = Promise.all([User.find({}).lean(),User.findOne({_id: id}).lean()])
      const [data, user] = findData
      return res.render('user', {
        data,user
      })
    } catch (e) {
      next()
    }
  }

  // [Get] /user/:id/edit 
  async edit(req, res, next) {
    try {
      const id = req.userId
      const findData = Promise.all([User.findById(req.params.id).lean(),User.findOne({_id: id}).lean()])
      const [data, user] = findData
      return res.render('edit', {
        data,user
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
      const deleteAccount = await Account.deleteOne({id})  
      const deleteUser = await User.deleteOne({
        _id: id
      })
      return res.redirect('back')
      } else { res.status(404).json("can't do it because you don't have permission")}
    } catch (e) {
      next()
    }
  }
}

module.exports = new UserController()
