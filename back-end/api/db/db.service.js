const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://localhost/create_userstories', { useNewUrlParser: true, useUnifiedTopology: true });

    const connection = mongoose.connection;
    connection.on('error', error => console.log(error));
    connection.on('open', () => console.log('Database connected'));
}

module.exports = { connect };