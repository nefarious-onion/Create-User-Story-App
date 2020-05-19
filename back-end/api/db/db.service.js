const mongoose = require('mongoose');
const MONGODB_SERVER = 'mongodb+srv://dbAdmin:kissakoirakettu@cluster0-oekcc.mongodb.net/test?retryWrites=true&w=majority';
const LOCAL_DB = 'mongodb://localhost/create_userstories';

const connect = () => {
    mongoose.connect(MONGODB_SERVER, { useNewUrlParser: true, useUnifiedTopology: true });

    const connection = mongoose.connection;
    connection.on('error', error => console.log(error));
    connection.on('open', () => console.log('Database connected'));
}

module.exports = { connect };