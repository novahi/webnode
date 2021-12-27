const newsRouter = require('./news')
const siteRouter = require('./site')
const userRouter = require('./user')
const signUpRouter = require('./signUp')
const loginRouter = require('./login')
const logoutRouter = require('./logout')
const middleware = requrie('../app/controllers/MiddlewareControllers')

function route(app) {
    app.use('/logout', logoutRouter)
    app.use('/login', loginRouter)
    app.use('/signup', signUpRouter)
    app.use('/news', newsRouter);
    app.use('/users',middleware.login,userRouter);
    app.use('/', siteRouter);
}

module.exports = route;
