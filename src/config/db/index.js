const mongoose = require('mongoose');
const uri =
    'mongodb+srv://admin:quyngusi1@qingusi.msf0k.mongodb.net/user_data?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully...!');
    } catch (error) {
        console.log('connect fail...!');
    }
}

module.exports = { connect };
