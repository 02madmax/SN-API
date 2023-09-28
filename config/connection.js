const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-network');

module.exports = connection;
