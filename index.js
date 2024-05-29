const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: '*' });
const port = process.env.PORT || 3000;

io.on("connection", socket => {
    socket.on('newForumMessage', message => {
        io.emit('newForumMessage', message);
    })

    socket.on('disconnect', reason => {

    });
});

server.listen(port, () => console.log("listening on port "+ port));
