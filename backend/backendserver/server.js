const express = require('express');
const cors = require('cors');
const { ConnectDb } = require('./App/Config/Connection');
const { UserRoutes } = require('./App/Routes/UserRoutes');
const { MangerRoutes } = require('./App/Routes/MagerRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());


app.use('/user', UserRoutes);
app.use('/manger', MangerRoutes)

app.get('/', (req, res) =>{
    res.send('Server Starting.....')
})

const PORT = process.env.PORT || 5000;

let SyanServer = async () =>{

    await ConnectDb();

    app.listen(PORT, ()=> {
        console.log(`Server runing http://localhost:${PORT}`);
    })

}

SyanServer();