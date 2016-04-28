var mongoose = require('mongoose');
var env = process.env;
require('../config/' + env.NODE_ENV); // for now

mongoose.connect(env.DB_HOST, env.DB_NAME, env.DB_PORT);

module.exports = mongoose;