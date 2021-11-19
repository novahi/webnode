const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: { type: String, minLength: 3 },
        age: { type: Number, min: 15 },
        address: { type: String },
        image: {
            type: String,
            default: 'http://qicute.tk/img/avatar-none.jpeg',
        },
        facebook: { type: String },
        mail: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
