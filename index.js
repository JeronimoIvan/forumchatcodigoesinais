const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: '*' });
const port = process.env.PORT || 3000;

io.on("connection", socket => {
    console.log("a User connected");
    socket.on('newForumMessage', message => {
        console.log(message);
        io.emit('newForumMessage', message);
    })

    socket.on('disconnect', reason => {

    });
});

server.listen(port, () => console.log("listening on port "+ port));
