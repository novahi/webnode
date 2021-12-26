const User = require('../models/User')
const Account = require('../models/Account')

class SignUpControllers {
  // [Get] /signup
  async get(req, res) {
    return await res.render('sigin_up')
  }
  // [Post] /signup (Handling new users)
  async post (req, res) {
    try {
      const formData = req.body
      if(!formData) {
        return res.redirect('back')
      }
      const { username, password, ...other } = formData
      other.image = `https://graph.facebook.com/${req.body.facebook.trim()}/picture?height=1000&width=1000&ftype=large&${process.env.TOKEN_FB}`
      const newUser = await new User(other).save()
      const id = newUser._id
      const newAccount = await new Account({id,username,password})
      res.redirect('/login')
      
   } catch(e) {
     res.status(404).json({"message": "Error! An error occurred. Please try again later"})   }
}   
   
  
}



module.exports = new SignUpControllers()
