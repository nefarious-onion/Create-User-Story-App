const mongoose = require('mongoose');
const epicSchema = require('./epic.schema');

const Epic = mongoose.model('Epic', epicSchema);

module.exports = Epic;