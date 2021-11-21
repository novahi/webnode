const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

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
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
