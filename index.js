//"npm run production" starts the program in production mode
const express = require('express');
const config = require('./config/config.js');
const expressConfig = require('./config/express');
const mongooseConfig = require('./config/mongoose');
const routes = require('./routes');

const app = express();

expressConfig(app);
mongooseConfig(app);

app.use(routes);

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));