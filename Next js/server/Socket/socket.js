const {Server} = require('socket.io');

let io;

let ConnectSocket = (server) =>{

    io = new Server(server, {
        cors : "*"
    });

     io.on("connection", (socket) =>{
        console.log("User connected", socket.id);

        socket.on("disconnected", () =>{
            console.log("User disconnected", socket.id);
        })
     })

}


let Getio = () =>{

    if(!io){
        throw new Error("Socket can not inilized")
    }

    return io; 

}


module.exports = {ConnectSocket, Getio};