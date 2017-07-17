var net = require('net');

var client = new net.Socket();
client.connect(6969, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Server: ' + data);
	client.destroy();
});

client.on('close', function() {
	console.log('Connection closed');
});