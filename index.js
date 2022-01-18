'use strict';

require('dotenv').config();

require('dotenv').config();
const server = require('./src/server.js');
const data = require('./src/models/index');

const PORT = process.env.PORT || 3002;

data.db.sync().then(() => {
  server.start(PORT);
});
