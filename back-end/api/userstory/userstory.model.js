const mongoose = require('mongoose');
const userstorySchema = require('./userstory.schema');

const Usertory = mongoose.model('Userstory', userstorySchema);

module.exports = Usertory;