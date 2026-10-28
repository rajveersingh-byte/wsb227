const mongoose = require('mongoose');


const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MOGODB_URL);

        console.log("Database Connect");
    }
    catch (error) {
        console.log(error.message)
    }
}

module.exports = {ConnectDb}