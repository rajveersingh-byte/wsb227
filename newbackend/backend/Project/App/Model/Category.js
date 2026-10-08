const mongoose = require('mongoose');

let CategortSchema = mongoose.Schema({

    CategoryName : {
        type : String,
        require : [true, "Please Enter You Category Name"]
    },

    CategoryImage : {
        type : String,
        require : true
    },

    Order : {
        type : Number
    },

    Slug : {
        type : String
    },

    MetaTitle : {
          type : String
    },

    MetaDescription : {
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

let CategoryModel = mongoose.model('categorie', CategortSchema);

module.exports = {CategoryModel}