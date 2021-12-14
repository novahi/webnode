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
      res.json({
        "message": "Login successful! "
      })
    })
    .catch(err) {
      res.json({
        "message": err
      })
    }
    next()
  }
  sigin(req, res, next) {
    
  }
}
