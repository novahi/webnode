const User = require('../models/User')
const AccountModels = require('../models/Account')
const jwt = require('jsonwebtoken')
class SignInControllers {
  async get(req, res) {
    return await res.render('sigin_in')
  }

  async post(req, res) {
    const formData = req.body
    try {
      const data = await AccountModels.findOne({username: formData.username})
      if(!data) {
        return res.status(404).json("Vui lòng nhập Tài Khoản !")
      }
      if(user.password != formData.password) {
        return res.status(404).json("Vui lòng nhập Mật Khẩu !")
      }
      if(data && user.password === formData.password) {
       jwt.sign({
         id: user.id
       },
       process.env.JWT_ACCESS_KEY,
       {
         expiresIn: "120s"
       }
       ) 
      }
    } catch(e) {
      res.json('error')
    }
  }

}

  module.exports = new SignInControllers()
  