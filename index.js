const express = require('express');
const server = express();
const nameService = require('./service/name_service');

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res) {
	res.send("Hello World!");
});

server.get('/name', (req, res) => {
	res.json({"name": "Anu"});
});

server.get('/hobby/:name', (req, res) => {
	const name = req.params.name;
	console.log(name);

	res.json({name: nameService.getHobby(name)});
});

// server.get("/index.html", (req, res) => {
// 	res.sendFile(__dirname + "/public/index.html");
// });

const PORT = 9095;
server.listen(PORT, function(err) {
	console.log("Server started on port " + PORT);
});

