var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') 
  {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var type,temp=files.filetoupload.name;
      j=temp.length;
      for(var i=0;i<j;i++)
      {
          if(temp[i]=='.')
            break;
      }
      type=temp.substr(i+1,j-1);
      if(type=="gif"||type=="jpg"||type=="ico"||type=="jpeg"||type=="png")
      {  
        var oldpath = files.filetoupload.path;
        var newpath = 'C:/Users/Ozone/Desktop/Inventory/Images/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        });
      }
      else if(type=="html"||type=="txt"||type=="doc"||type=="pdf"||type=="docx")
      {  
        var oldpath = files.filetoupload.path;
        var newpath = 'C:/Users/Ozone/Desktop/Inventory/Text/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        });
      }
      else if(type=="js"||type=="json")
      {  
        var oldpath = files.filetoupload.path;
        var newpath = 'C:/Users/Ozone/Desktop/Inventory/Js/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        });
      }
      else if(type=="mp3"||type=="wav"/*||type=="ico"||type=="jpeg"||type=="png"*/)
      {  
        var oldpath = files.filetoupload.path;
        var newpath = 'C:/Users/Ozone/Desktop/Inventory/Audio/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        });
      }
      fs.readFile('./Uploaded.html', function(err, data) {
    		if (err) 
		    {
      			res.writeHead(404, {'Content-Type': 'text/html'});
      			return res.end("404 Not Found");
    		}
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.end(data);
   }); 
        
      //});
   });
  } 

 else 
 {
	fs.readFile('./Main.html', function(err, data) {
    		if (err) 
		    {
      			res.writeHead(404, {'Content-Type': 'text/html'});
      			return res.end("404 Not Found");
    		} 
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
   }); 
 }
}).listen(8087); 