var http = require('http');
var app = require('express')();
var server = http.createServer(app);
var io = require('socket.io')(server);
var port = 5000;
server.listen(port, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Server listening on port ' + port);
    }
});
app.get('/', function (req, res) {
    res.sendFile('webPage.html', { root: '.' });
});
io.on("connection", function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        io.emit('chat message', "A user has disconnected.");
        console.log('user disconnected');
    });
});
io.on("connection", function (socket) {
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
});
io.on("connection", function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
