const newsRouter = require('./news');
const site = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', site);
}

module.exports = route;
