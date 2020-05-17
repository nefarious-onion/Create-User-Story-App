const mongoose = require('mongoose');

const epicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    stories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Userstory"
        }
    ] 
})

module.exports = epicSchema;