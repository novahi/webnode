const User = require('../models/User')
const Accounts = require('../models/Account')


class Middleware {
  async checkLogin(req, res, next) {
    const token = req.headers.token
    
  }
  
  
  }
  
  async createUser (req, res, next) {
    const formData = req.body
    console.log(formData)
  }
  
}

module.exports = new Middleware()