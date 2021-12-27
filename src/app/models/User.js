const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const User = new Schema({
  name: {
    type: String,
    minLength: 3
  },
  age: {
    type: Number,
    min: 15
  },
  address: {
    type: String
  },
  image: {
    type: String,
    default: 'https://scontent.xx.fbcdn.net/v/t1.30497-1/c379.0.1290.1290a/84628273_176159830277856_972693363922829312_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=12b3be&_nc_ohc=lreSzZHG1jMAX9JAW_Z&_nc_ht=scontent.xx&edm=AHgPADgEAAAA&oh=00_AT-F0FlhZcR4r0t7dBA_rY0UoJmjV5rxCC8hxVQvPxrUlQ&oe=61DA624B',
  },
  facebook: {
    type: String
  },
  mail: {
    type: String
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  },
}, {
  timestamps: true,
  versionKey: false
}, );

module.exports = mongoose.model('User', User);