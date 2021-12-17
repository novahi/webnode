const User = require('../models/User');
const AccountModels = require('../models/Account');


class SiginController {
  validatorSigin(req, res, next) {
    const data = req.body
    res.json(data)
  }
  
  sigin(req, res, next) {
    res.render('sigin')
  }
}

module.exports = new SiginController()
