var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	socket.on('pixel', function(p){
		socket.broadcast.emit('nuevo pixel', p);
	});

});

server.listen(3344);