var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  switch(req.url)
  {
  	case './Image' : fs.readFile('./My.html', function(err, data) {
    	if (err) 
		{
      			res.writeHead(404, {'Content-Type': 'text/html'});
      			return res.end("404 Not Found");
    	} 
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
	}); 
	break; 

  	case './Audio' : fs.readFile('./My.html', function(err, data) {
    	if (err) 
		{
      			res.writeHead(404, {'Content-Type': 'text/html'});
      			return res.end("404 Not Found");
    	} 
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
	});
	break;

  	case './Js': fs.readFile('./My.html', function(err, data) {
    	if (err) 
		{
      			res.writeHead(404, {'Content-Type': 'text/html'});
      			return res.end("404 Not Found");
    	} 
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
	});
  	break;

  	case './Text' : fs.readFile('./My.html', function(err, data) {
    	if (err) 
		{
      			res.writeHead(404, {'Content-Type': 'text/html'});
      			return res.end("404 Not Found");
    	} 
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
	});
	break;   

  	default : 
  }
}).listen(8085);