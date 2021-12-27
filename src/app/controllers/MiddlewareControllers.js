const User = require('../models/User')
const Account = require('../models/Account')

class Check {
  async function login(req, res, next) {
  try {
    const token = req.cookies.accessToken
    if (!token) {
      res.redirect("/login")
    }
    if (token) {
      const tokenCheck = await jwt.verify(token, process.env.JWT_ACCESS_KEY)
    }
    else {
      res.redirect('/login')
    }
    if (tokenCheck.id) {
      return next()
    } else {
      res.redirect('/login')
    }
  } catch (e) {
    res.json("Server error")
  }
}

}
  

module.exports = new Check()