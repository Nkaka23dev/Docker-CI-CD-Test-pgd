const app = require("express")();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.get("/", (req, res) => {
    res.send("Welcome to the WebSocket server!");
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