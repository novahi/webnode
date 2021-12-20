const newsRouter = require('./news');
const siteRouter = require('./site');
const userRouter = require('./user');



function route(app) {
    
    app.use('/news', newsRouter);
    app.use('/users', userRouter);
    app.use('/', siteRouter);
}

module.exports = route;
