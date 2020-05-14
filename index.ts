const http = require('http');
const app = require('express')();
const server = http.createServer(app);
const io = require('socket.io')(server);
const port = 5000;


server.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server listening on port ' + port);
    }
});


app.get('/', (req, res) => {
    res.sendFile('webPage.html', { root: '.' })});



io.on("connection", socket => {
    console.log('a user connected');
    io.emit('chat message', "A user has joined.")

    socket.on('disconnect', () => {
        io.emit('chat message', "A user has disconnected.")
        console.log('user disconnected');
    });
});


io.on("connection", socket => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

io.on("connection", socket => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
