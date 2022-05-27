const express = require('express');
require('dotenv').config();
//const chalk = import('chalk');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const createPath = require('./helpers/create-path');

// const errorMsg = chalk.white;//.bgRedBright;
// const successMsg = chalk.green;//.white;

const postRoutes = require('./routes/post-routes');
const postApiRoutes = require('./routes/api-post-routes');
const contactRoutes = require('./routes/contact-routes');

const app = express();

app.set('view engine', 'ejs');

mongoose
.connect(process.env.MONGO_URL)
.then((res) => console.log('Connected to DB'))
.catch((error) => console.log(error));

app.listen(process.env.PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(methodOverride('_method'));

app.use(express.urlencoded( { extended: false }));

app.use(express.static('./views/styles'));

app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), {title} );
});

app.use(postRoutes);
app.use(postApiRoutes);
app.use(contactRoutes);

app.get('/about-us', (req, res) => {
    res.redirect('/contacts');
});

app.use((req, res) => {
    const title = 'Error page';
    res
    .status(404)
    .render(createPath('error'), { title });
});
