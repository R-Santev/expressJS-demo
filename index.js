//"npm run production" starts the program in production mode
const express = require('express');
const config = require('./config/config.js');
const expressConfig = require('./config/express');

const app = express();

expressConfig(app);

app.get('/', (req, res) => {
    res.render('home', {layout: false});
})

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));