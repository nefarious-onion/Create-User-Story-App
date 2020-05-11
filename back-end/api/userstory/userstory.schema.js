const mongoose = require('mongoose');

const userstorySchema = new mongoose.Schema({
    story: {
        type: String,
        required: true
    }
})

module.exports = userstorySchema;