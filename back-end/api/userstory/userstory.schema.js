const mongoose = require('mongoose');

const userstorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = userstorySchema;