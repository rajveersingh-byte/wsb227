const mongoose = require('mongoose');


const MangerSchema = mongoose.Schema({

    MangerName : {
        type : String,
        required : true
    },


    MangerDepartment : {
        type : String,
        required : true
    },

    User :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'companyuser'
    },

    PhoneNumber : {
        type : Number
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

const MangerModel = mongoose.model('manger', MangerSchema);

module.exports = {MangerModel}