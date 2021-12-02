const path = require('path');
const express = require('express');
const methodOverride = require('method-override')

const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');
const app = express();
const port = process.env.PORT || 3000;

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connect mongodb

db.connect();




// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
          sum: (a,b) => {return a+b} 
     }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resrc', 'views'));
app.use(methodOverride('_method'))
// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
