const User = require('../models/User')
const AccountModels = require('../models/Account')


class Middleware {
  async createUser (req, res, next) {
    try {
      const formdata = req.bodu
      const { password, username, ...other } = formdata
      const newUser = await new User(other).save()
      if (!formdata) {
        return res.status(500).json("error")
      }
      if (newUser) {
        next()
      }
    } catch (e) {
      res.stutus(500).json('error')
    }
  }
  
  async createAccount(req,res) {
    console.log(formdata)
  }

}


module.exports = new Middleware()