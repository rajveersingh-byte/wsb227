const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    
    Title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    },


    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    CommentMessage: {
        type: String,
    },

    status: {
        type: Boolean,
        default: false
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

let CommentModel = mongoose.model('comment', CommentSchema);

module.exports = { CommentModel };