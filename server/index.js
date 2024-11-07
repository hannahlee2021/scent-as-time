const WebSocket = require('ws');

const ws = new WebSocket.Server({port:5503});

ws.on("connection", socket => {
    console.log("new connection");


    socket.on("message", data => {
        console.log("message event triggered");
       const message = data.toString();
        console.log(`client received: ${data}`);

        try {
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(message.toUpperCase());
                console.log(`sent response: ${message.toUpperCase()}`);
            } else {
                console.log(`socket not open. current state: ${socket.readyState}`);
            } 
            

        
        } catch (err) {
            console.error("error sending response", err.message);
            console.log("error details", err);
        }

       
        
        
    });     

    socket.on("error", error => {
        console.error("websocket error", error);
    });

    

    socket.on("close", () => {
        console.log("connection closed");
    })
})