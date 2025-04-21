const app = require("express")();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>WebSocket Server</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                h1 { color: #3498db; }
                p { font-size: 18px; }
            </style>
        </head>
        <body>
            <h1>Welcome to the WebSocket Server!</h1>
            <p>Connect using a WebSocket client to start real-time communication.</p>
            <h5>lorem20</h5>
        </body>
        </html>
    `);
});


io.on("connection", (socket) => {
    console.log("What is socket: ", socket)
    console.log("Socket is active to be connected")

    socket.on("Chat", (payload) => {
     console.log("what is the payload", payload)
     io.emit("chat", payload);
    })
})

// app.listen(3000, () => console.log("Server is active on port: 5000")) 

server.listen(3000, () => console.log("Server is listening on port: 3000"))