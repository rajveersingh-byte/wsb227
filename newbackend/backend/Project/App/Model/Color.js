let mongoose = require('mongoose');

let ColorSchema = mongoose.Schema({
    ColorName : {
        type : String,
        require : true
    },

    ColorCode :{
        type : String,
    },

    Order :{
        type : Number,
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

let ColorModel = mongoose.model('color', ColorSchema);

module.exports = {ColorModel}