const mongoose = require('mongoose');


let ConnectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
    console.log("Db Connected")
    }
    catch(error){
        console.log("Db Not Connected");
        console.log(error.message)
    }
    
}

module.exports = {ConnectDb};