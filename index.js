//"npm run production" starts the program in production mode
const express = require('express');
const config = require('./config/config.js');

const app = express();

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));