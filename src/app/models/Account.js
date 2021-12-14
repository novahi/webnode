const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Accounts = new Schema(
    {
        username: { type: String,  unique: true },
        password: { type: String, min: 6 }
    },
    {
        timestamps: true,
        versionKey: false
    },
);

module.exports = mongoose.model('Accounts', Accounts);
