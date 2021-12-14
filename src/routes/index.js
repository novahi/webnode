const newsRouter = require('./news');
const siteRouter = require('./site');
const userRouter = require('./user');
const authenticationRouter = require('./authentication');

function route(app) {
    app.use('/account', authenticationRouter);
    app.use('/news', newsRouter);
    app.use('/users', userRouter);
    app.use('/', siteRouter);
}

module.exports = route;
