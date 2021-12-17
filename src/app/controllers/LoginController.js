const User = require('../models/User');
const AccountModels = require('../models/Account');

class LoginController {
  validatorLogin (req, res, next) {
  const username = req.body.username
  const password = req.body.password
  AccountModels.findOne({username,password})
  .then(data => {
    try {
      if(data != null) {
        res.status(200).json(data)
      } else {
        res.status(304).json({
          "message": "login fail !"
        })
      }
    } catch (e) {
      res.status(304).json({
        "message": "login fail !"
      })
    }
  })
  
  }
  login(req, res, next) {
    res.render('login')
  }
  
  
}

module.exports = new LoginController();
