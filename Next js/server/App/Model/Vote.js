const mongoose = require('mongoose');


const VoteSchema = new mongoose.Schema({

    Title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    },


    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    voteType : {
        type : String,
        enum : ['Likes', 'Dislikes']
    },

    status: {
        type: Boolean,
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

let Votemodel = mongoose.model('vote', VoteSchema);

module.exports = { Votemodel };