const User = require('../models/User');
const Account = require('../models/Account');

class Authentication {
  login(req, res, next) {
    const user = req.body.username
    const password = req.body.password
    Account.findOne({
      user,
      password
    })
    .then(data => {
      if(data) {
        res.json({
          "message": "Login successful! "
        })
        return
      }
    })
    .catch(err => {
      res.json({
        "message": "Login Faile! "
      })
    })
  }
  sigin(req, res, next) {
    
  }
}

module.exports = new Authentication();
