const newsRouter = require('./news');



function route(app) {
    app.get('/', (req, res) => {
        res.render('home')
    })
    app.use('/news', newsRouter);
   
 
}

module.exports = route;
