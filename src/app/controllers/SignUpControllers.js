const User = require('../models/User')
const Account = require('../models/Account')

class SignUpControllers {
  // [Get] /signup
  async get(req, res) {
    return await res.render('signUp')
  }
  // [Post] /signup (Processing new accounts and user information)
  async post (req, res) {
    try {
      const formData = req.body
      if(!formData) {
        return res.redirect('back')
      }
      const { username, password, ...other } = formData
      const username1 =  username.toLowerCase()
      other.image = `https://graph.facebook.com/${req.body.facebook.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.TOKEN_FB}`
      const newAccount = await new Account({id,username: username1,password}).save()
      const newUser = await new User(other).save()
      const id = newUser._id
      newAccount({id}).save()
      res.status(200).redirect('/login')
      
   } catch(e) {
     res.status(404).json({"message": "Error! An error occurred. Please try again later"})   }
}   
   
  
}



module.exports = new SignUpControllers()
