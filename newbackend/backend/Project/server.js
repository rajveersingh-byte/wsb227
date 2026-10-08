const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();
const path = require('path');
const { ConnectDB } = require('./App/Config/Conneaction');
const { AdminRoutes } = require('./App/Routes/AdminRoutes');


app.use(express.json());

app.use(cors());




app.use('uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', AdminRoutes);

//homeRoutes

app.use('/', (req,res) =>{
    res.send("Server Start")
})


let Sycn = async () =>{

    await ConnectDB();

    app.listen(process.env.PORT, () =>{
        console.log(`Server Start with http://localhost:${process.env.PORT}`);
    })
}

Sycn();
