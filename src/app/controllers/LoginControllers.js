const User = require('../models/User')
const AccountModels = require('../models/Account')
const jwt = require('jsonwebtoken')
class SignInControllers {
  async get(req, res) {
    return await res.render('login')
  }

  async post(req, res) {
    const formData = req.body
    try {
      const data = await AccountModels.findOne({username: formData.username})
      if(!data) {
        return res.status(404).json("Vui lòng nhập Tài Khoản !")
      }
      if(data.password != formData.password) {
        return res.status(404).json("Vui lòng nhập Mật Khẩu !")
      }
      if(data) {
      const accessToken =  jwt.sign({
         id: data._id
       },
       process.env.JWT_ACCESS_KEY,
       {
         expiresIn: "120s"
       }
       ) 
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        secure: true
      })
      }
      res.status(200).redirect('/')
    } catch(e) {
      res.json("error")
    }
  }

}

  module.exports = new SignInControllers()
  
