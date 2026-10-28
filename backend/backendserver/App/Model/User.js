const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    UserName : {
        type : String,
        required : true
    },

    UserEmail :{
         type : String,
        required : true
    },

    MangerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'manger'
    },

    UserNumber : {
         type : Number,
    },

    UserRol :{
        type : String
    },

    Status : {
        type : Boolean,
        default : true
    }

},
    {
        timestamps : true
    }

)

const UserModel = mongoose.model('companyuser', UserSchema);

module.exports = {UserModel}