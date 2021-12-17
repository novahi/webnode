const User = require('../models/User');
const Account = require('../models/Account');

class Authentication {
  validatorLogin (req, res, next) {
  const username = req.body.username
  const password = req.body.password
  Account.findOne({username,password})
  .then(data => res.send(data))
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
