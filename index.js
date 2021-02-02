//"npm run production" starts the program in production mode
const express = require('express');
const config = require('./config/config.js');
const handlebars = require('express-handlebars');
const app = express();

app.engine('hbs', handlebars({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {layout: false});
})

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));