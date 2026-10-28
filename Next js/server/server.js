const express = require('express');
require('dotenv').config();
const http = require('http');
const cors = require('cors');
const { ConnectDb } = require('./App/Config/Connection');
const { CommanRoutes } = require('./App/Routes/CommanRoutes');
const { ConnectSocket } = require('./socket/Socket');

const app = express();

app.use(express.json());
app.use(cors());

let server = http.createServer(app);

ConnectSocket(server);


app.get('/', (req, res) =>{
    res.send('Server Start')
})


app.use('/api', CommanRoutes);

let Sycn = async () =>{
    ConnectDb();

    server.listen(8000, () =>{
    console.log(`Server runing http://localhost:8000`);
})
}

Sycn()
