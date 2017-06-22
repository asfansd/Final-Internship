var express = require("express");
var app     = express();
var path1    = require("path");
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

app.get('/',function(req,res){
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/sushmithaj/Desktop/Inventory/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        //res.end();
      });
    });
  } 
  else 
  {
		res.sendFile(path1.join(__dirname+'/Main.html'));
  		    //__dirname : It will resolve to your project folder.
  }
});
app.listen(8080);