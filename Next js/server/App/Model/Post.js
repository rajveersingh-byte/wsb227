const mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({

    PostTitle: {
        type: String,
        required: true
    },

    PostDescription: {
        type: String,
    },

    status : {
        type : Boolean,
        default : false
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }

})

let PostModel = mongoose.model('post', PostSchema);

module.exports = {PostModel};