const mongoose = require('mongoose');
const { error } = require('node:console');

let ConnectDB = async () => {
    await mongoose.connect(process.env.MONODB_URL)
        .then((res) => {
            console.log("Db Conneact")
        })
        .catch((error) => {
            console.log(error.message)
        })
}

module.exports = {ConnectDB};