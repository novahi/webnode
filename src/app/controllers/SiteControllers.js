const User = require('../models/User')
const jwt = require('jsonwebtoken')
class SiteController {
  // [Get] home page
    async home(req, res, next) {
      const token = res.cookie.accessToken
      const verifyToken = jwt.verify(token,process.env.JWT_ACCESS_KEY)
      const id = verifyToken.id
      const data = await User.findOne({_id: id})
        res.render('home',{data});
    }
    // [Get] /search
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SiteController();
