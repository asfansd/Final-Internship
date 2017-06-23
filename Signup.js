var http=require('http');
var fs=require('fs');
var url=require('url');
var formidable=require('formidable');

http.createServer(function(req,res){
   	
  if (req.url == '/Signup') 
  {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
    //var temp = fields.email;
    req.url='http:localhost:8087/Login';  
    fs.readFile('./Internship-master/Login.html', function(err, data) {
    if (err) 
	{
      		res.writeHead(404, {'Content-Type': 'text/html'});
      		return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log("done");
    res.end();	
  }); 
        
  });
  } 
  else
  {
  fs.readFile('./Internship-master/Signup.html', function(err, data) {
        if (err) 
	   {
      		res.writeHead(404, {'Content-Type': 'text/html'});
      		return res.end("404 Not Found");
    	} 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
   // console.log(temp);
    res.end();	
  }); 
        
  
  }
}).listen(8087);
