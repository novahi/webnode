const newsRouter = require('./news')
const siteRouter = require('./site')
const userRouter = require('./user')
const signUpRouter = require('./signUp')
const loginRouter = require('./login')


function route(app) {
    app.use('/login', loginRouter)
    app.use('/signup', signUpRouter)
    app.use('/news', newsRouter);
    app.use('/users', userRouter);
    app.use('/', siteRouter);
}

module.exports = route;
