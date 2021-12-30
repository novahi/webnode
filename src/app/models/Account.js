const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Accounts = new Schema({
  username: {
    type: String,
    unique: true,
    min: 5,
    required: true
  },
  password: {
    type: String,
    min: 6,
    required: true
  },
  id: {
    type: String,
    unique: true,
    default: null
  }
}, {
  timestamps: {currentTime: () => new Date().toLocaleString("vi-VI", { timeZone: "Asia/Ho_Chi_Minh" })},
  versionKey: false
}, );

module.exports = mongoose.model('Accounts', Accounts);