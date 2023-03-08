const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/codeial_development');

const db = mongoose.connection;

db.on('error' , console.error.bind(console , "Error Connecting to MongoDB"));

db.once('open' , function () {
    console.log('Connected to MongoDB');
});

module.exports = db;