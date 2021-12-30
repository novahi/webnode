const User = require('../models/User')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

class Middleware {
  async check(req, res, next) {
  try {
    const token = req.cookies.accessToken
    if (!token) {
     return  res.status(200).redirect("/login")
    } else {
    const decode = jwt.verify(token, process.env.JWT_ACCESS_KEY)
    if(!decode) {
      res.status(404).json("You are using fake authentication code, please login to use our service !")
    }
      req.userId = decode.id
      return next()
    }
  } catch (e) {
    res.status(500).json("Server error")
  }
}

}
  

module.exports = new Middleware()