import mongoose from 'mongoose'
async function connect() {
    try {
        await mongoose.connect(process.env.URL_DB, {
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
