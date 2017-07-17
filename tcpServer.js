var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

net.createServer(function(socket) {

    console.log('CONNECTED: ' +
        socket.remoteAddress + ':' + socket.remotePort);

    socket.on('data', function(data) {
        console.log('DATA ' + socket.remoteAddress + ': ' + data);
        socket.write('Client: "' + data + '"');
    });

    socket.on('close', function(data) {
        console.log('CLOSED: ' + socket.remoteAddress + ':' + socket.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);