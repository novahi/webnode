import newsRouter from './news'
import siteRouter from './site'
import userRouter from './user'
import signUpRouter from './signUp'
import loginRouter from './login'


function route(app) {
    app.use('/login', loginRouter)
    app.use('/signup', signUpRouter)
    app.use('/news', newsRouter);
    app.use('/users', userRouter);
    app.use('/', siteRouter);
}

module.exports = route;
