var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', function(err, html) {
			response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
			response.write(html);
			response.end();
		});
	}  else if  (request.method === 'GET' && request.url === '/cat.png') {
		fs.readFile('./cat.png', function(err, html) {
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(html);
			response.end();
		});
		
	} else {
			response.statusCode = 404;
			response.write('<h1><img src="/cat.png" alt=""></h1>');
			response.end();
	}
});

server.listen(8080);