const User = require('../models/User')
const AccountModels = require('../models/Account')

class SignUpControllers {
  async get(req, res) {
    return await res.render('sigin_up')
  }

  async post (req, res) {
    try {
      const formdata = req.body
      formData.image = `https://graph.facebook.com/${req.body.facebook.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.TOKEN_FB}`
      const { password, username, ...other } = formdata
      
      const newUser = await new User(other).save()
      if (!formdata) {
        return res.status(500).json("error")
      }
      if (newUser) {
        next()
      }
    } catch (e) {
      res.stutus(500).json('error')
    }
    
   }
   
   async createAccount(req, res) {
     console.log(formdata)
   }
  
}



module.exports = new SignUpControllers()