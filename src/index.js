import path from 'path'
import express from 'express'
import methodOverride from 'method-override'
import dotenv from 'dotenv'
import handlebars from 'express-handlebars');
import cookieParser from 'cookie-parser'
import route from './routes'
import db from './config/db'
const app = express();
const port = process.env.PORT || 3000;

// Use Dotenv 
dotenv.config()
// Use static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect with MongoDB

db.connect();

// Working with Cookies
app.use(cookieParser())


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

// Edit the submission method from the client side 
app.use(methodOverride('_method'))
// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
