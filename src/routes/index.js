const newsRouter = require('./news');
const siteRouter = require('./site');
const userRouter = require('./user');
const loginRouter = require('./login');
const siginRouter = require('./sigin');


function route(app) {
    app.use('/login', loginRouter);
    app.use('/sigin', siginRouter)
    app.use('/news', newsRouter);
    app.use('/users', userRouter);
    app.use('/', siteRouter);
}

module.exports = route;
