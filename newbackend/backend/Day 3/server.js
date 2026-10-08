const express = require('express');


const app  = express();

app.use(express.json());

// view APi
app.get('/', (req, res) =>{

    let Obj  = [
        {
            id : 1,
            name : "WsCube Tech",
            address : "Ratanada"
        },

        {
            id : 2,
            name : "WsCube Tech Pri. Limt.",
            address : "Jaipur"
        }
    ]


    // res.send(JSON.stringify(Obj));

    res.status(200).json({
        _status : true,
        _data : Obj
    })
})

// post-api

app.post('/create' , (req, res) =>{

    let {useradmin, userpassword} = req.body;

    res.status(201).json({
        _status : true,
        useradmin,
        userpassword
    })

})




let PORT = 8000;

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
})