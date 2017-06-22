var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
        fs.readFile('./Test.html', function(err, data) {
    	if (err) 
		{
      			res.writeHead(404, {'Content-Type': 'html'});
      			return res.end("404 Not Found");
    	} 
    	res.writeHead(200, {'Content-Type': 'image/jpg'});
    	res.write(data);
	});
}).listen(8080);