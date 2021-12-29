const User = require('../models/User')
const Account = require('../models/Account')

class Check {
  async login(req, res, next) {
  try {
    const token = req.cookies.accessToken
    if (!token) {
     return  res.redirect("/login")
    }
    const decode = jwt.verify(token, process.env.JWT_ACCESS_KEY)
    req.userId = decode.id
    
      return next()
  } catch (e) {
    res.status(500).json("Server error")
  }
}

}
  

module.exports = new Check()