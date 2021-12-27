const User = require('../models/User')
const Account = require('../models/Account')

class Middleware {
  async checkLogin(req, res, next) {
    try {
      const token = req.cookies.accessToken
      if (!token) {
        res.redirect("/login")
      }
      // token check 
      
        const tokenCheck = await jwt.verify(token, process.env.JWT_ACCESS_KEY)
        if(tokenCheck) {
          next()
        } else {
          res.redirect('/login')
        }
      } 
     catch (e) {
      res.json("Server error")
    }
  }
}


module.exports = new Middleware()