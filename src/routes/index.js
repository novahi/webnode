const newsRouter = require('./news');
const siteRouter = require('./site');
const userRouter = require('./user');
const signUpRouter = require('./signUp')


function route(app) {
    app.use('/signup')
    app.use('/news', newsRouter);
    app.use('/users', userRouter);
    app.use('/', siteRouter);
}

module.exports = route;
