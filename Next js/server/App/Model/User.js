const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    UserName: {
        type: String
    },

    UserEmail: {
        type: String
    },

    PhoneNumber: {
        type: Number
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


let UserModel = mongoose.model('user', UserSchema);

module.exports = {UserModel};