const mongoose = require('mongoose');
const uri = process.env.URL_DB
async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('Connect To DB Successfully!');
    } catch (error) {
        console.log('Connect To DB Fail!');
    }
}

module.exports = { connect };
