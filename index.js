const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: '*' });
const port = process.env.PORT || 3000;

io.on("connection", socket => {
    io.emit("connection");
    console.log("connection");
});

server.listen(port, () => console.log("listening on port "+ port));