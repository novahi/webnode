const User = require('../models/User')
const Accounts = require('../models/Account')


class Middleware {
  async checkLogin(req, res, next) {
    try {
      const token = req.cookies.accessToken
      if (!token) {
        res.redirect("/login")
      }
      // token check 
      if (token) {
        const tokenCheck = await jwt.verify(token, process.env.JWT_ACCESS_KEY)
        console.log(tokenCheck)
      } else {
        res.redirect('/login')
      }
    } catch (e) {
      res.json("Server error")
    }
  }
}


module.exports = new Middleware()