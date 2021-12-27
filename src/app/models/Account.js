import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const Accounts = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    min: 6,
    required: true
  },
  id: {
    type: String,
    unique: true
  }
}, {
  timestamps: true,
  versionKey: false
}, );

module.exports = mongoose.model('Accounts', Accounts);