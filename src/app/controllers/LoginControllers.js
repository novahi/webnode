const User = require('../models/User')
const Account = require('../models/Account')

const jwt = require('jsonwebtoken')
class LoginControllers {
  async get(req, res) {
    return await res.render('login')
  }

  async post(req, res) {
    const formData = req.body
    const {username} = formData
    const username1 = username.toLowerCase()
    try {
      const data = await Account.findOne({username: username1})
      if(!data) {
        return res.status(404).json("Vui lòng nhập Tài Khoản !")
      }
      if(data.password != formData.password) {
        return res.status(404).json("Vui lòng nhập Mật Khẩu !")
      }
      if(data) {
      const accessToken =  jwt.sign({
         id: data.id
       },
       process.env.JWT_ACCESS_KEY,
       {
         expiresIn: "300s"
       }
       ) 
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        secure: false
      })
      }
      res.status(200).redirect('/')
    } catch(e) {
      res.json("Login failed, server side error !")
    }
  }

}

  module.exports = new LoginControllers()
  
