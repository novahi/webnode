const User = require('../models/User')
const Account = require('../models/Account')

class Check {
  async login(req, res, next) {
  try {
    const token = req.cookies.accessToken
    if (!token) {
      res.redirect("/login")
    }
      return next()
  } catch (e) {
    res.json("Server error")
  }
}

}
  

module.exports = new Check()