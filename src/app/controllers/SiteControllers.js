const User = require('../models/User')
const jwt = require('jsonwebtoken')
class SiteController {
  // [Get] home page
    async home(req, res, next) {
      const token = res.cookie.accessToken
      if(!token) {
       return await res.render('home')
      }
      const verifyToken = jwt.verify(token,process.env.JWT_ACCESS_KEY)
      const id = verifyToken.id
      const data = await User.findOne({_id: id})
      return await res.render('home',{data});
    }
    // [Get] /search
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SiteController();
