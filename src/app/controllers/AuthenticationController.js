const User = require('../models/User');
const AccountModels = require('../models/Account');

class Authentication {
  validatorLogin (req, res, next) {
  const username = req.body.username
  const password = req.body.password
  AccountModels.findOne({username,password})
  .then(data => {
    try {
      if(data !== undefined) {
        res.send(data)
      }
    } catch (e) {
      res.status(304).json({
        "message": "login fail !"
      })
    }
  })
  .catch(err => res.json({
    "message": "login fail !"
  }))
  
  }
  validatorSigin (req, res, next) {
  
  }
  login (req, res, next) {
    res.render('login')
  }
  sigin (req, res, next) {
    res.render('sigin')
  }
  
}

module.exports = new Authentication();
