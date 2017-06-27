var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');
    //imageDir = 'C:/Users/asfansajid/Desktop/Inventory/Images/';

http.createServer(function (req, res) {
    
    var query = url.parse(req.url,true);
    query=query.pathname;
  if(req.url=='/Image')
  {
  	    //var query = url.parse(req.url,true).query;
        //pic = query.image;
            //console.log('Hello');
            var imageDir = 'C:/Users/asfansajid/Desktop/Inventory/Images/';
            getImages(imageDir, function (err, files) {
            var imageLists = '<ul>';
            for (var i=0; i<files.length; i++) {
                imageLists += '<li><a href="/?image=' + files[i] + '">' + files[i] + '</li>';
            }
            imageLists += '</ul>';
            res.writeHead(200, {'Content-type':'text/html'});
            res.write('<html>');
	    res.write('<head>');
            res.write('<title>Images</title>');
            res.write('<link rel="stylesheet" href="https://github.com/asfansd/Internship-2/blob/master/table-css.css">');
	    res.write('</head>');
            res.write('<body>');
	    res.write('<table height="30%" align="center" border="1" width="30%">');
	    res.write('<tr cellpadding="4px"><th align="center">Images</th></tr>');
	    res.write('<tr cellpadding="4px"><td align="center">');
	    res.write(imageLists);
	    res.end('</td></tr>');
        });
  }
  else if(req.url=='/Audio')
  {
            imageDir = 'C:/Users/asfansajid/Desktop/Inventory/Audio/';
             getAudio(imageDir, function (err, files) {
            var audioLists = '<ul>';
            for (var i=0; i<files.length; i++) {
                audioLists += '<li><a href="/?audio=' + files[i] + '">' + files[i] + '</li>';
            }
            audioLists += '</ul>';
            res.writeHead(200, {'Content-type':'text/html'});
            res.write('<html>');
	    res.write('<head>');
            res.write('<title>Audio</title>');
            res.write('<link rel="stylesheet" href="https://github.com/asfansd/Internship-2/blob/master/table-css.css">');
	    res.write('</head>');
            res.write('<body>');
	    res.write('<table height="30%" align="center" border="1" width="30%">');
	    res.write('<tr cellpadding="4px"><th align="center">Audio</th></tr>');
	    res.write('<tr cellpadding="4px"><td align="center">');
	    res.write(audioLists);
	    res.end('</td></tr>');
        });

  }
  else if(req.url=='/Text')
  {
       	    imageDir = 'C:/Users/asfansajid/Desktop/Inventory/Text/';
            getText(imageDir, function (err, files) {
            var textLists = '<ul>';
            for (var i=0; i<files.length; i++) {
                textLists += '<li><a href="/?text=' + files[i] + '">' + files[i] + '</li>';
            }
            textLists += '</ul>';
            res.writeHead(200, {'Content-type':'text/html'});
            res.write('<html>');
	    res.write('<head>');
            res.write('<title>Documents</title>');
            res.write('<link rel="stylesheet" href="https://github.com/asfansd/Internship-2/blob/master/table-css.css">');
	    res.write('</head>');
            res.write('<body>');
	    res.write('<table height="30%" align="center" border="1" width="30%">');
	    res.write('<tr cellpadding="4px"><th align="center">Documents</th></tr>');
	    res.write('<tr cellpadding="4px"><td align="center">');
	    res.write(textLists);
	    res.end('</td></tr>');
        });

  }
    
  else if(req.url=='/Js')
  {
    	    imageDir = 'C:/Users/asfansajid/Desktop/Inventory/Js/';
            getJs(imageDir, function (err, files) {
            var jsLists = '<ul>';
            for (var i=0; i<files.length; i++) {
                jsLists += '<li><a href="/?js=' + files[i] + '">' + files[i] + '</li>';
            }
            jsLists += '</ul>';
            res.writeHead(200, {'Content-type':'text/html'});
            res.write('<html>');
	    res.write('<head>');
            res.write('<title>Js</title>');
            res.write('<link rel="stylesheet" href="https://github.com/asfansd/Internship-2/blob/master/table-css.css">');
	    res.write('</head>');
            res.write('<body>');
	    res.write('<table height="30%" align="center" border="1" width="30%">');
	    res.write('<tr cellpadding="4px"><th align="center">Js</th></tr>');
	    res.write('<tr cellpadding="4px"><td align="center">');
	    res.write(jsLists);
	    res.end('</td></tr>');
        });

  }
  else
  {
        var query = url.parse(req.url,true).query;
        
      if(query.image){
        var imageDir='C:/Users/asfansajid/Desktop/Inventory/Images/';
        pic = query.image;
        fs.readFile(imageDir + pic, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'text/html'})
                console.log(err);
                res.end("No such Image");    
            } else {
                //specify the content type in the response will be an image
             console.log(typeof pic);
             res.writeHead(200,{'Content-type':'image/jpg'});
                res.end(content); 
            }
        });
        }
      
       else if(query.js){
        pic = query.js;
            var imageDir='C:/Users/asfansajid/Desktop/Inventory/Js/';
        fs.readFile(imageDir + pic, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'text/html'})
                console.log(err);
                res.end("No such Js");    
            } else {
                //specify the content type in the response will be an image
             //console.log(typeof pic);
             res.writeHead(200,{'Content-type':'text/plain'});
                res.end(content); 
            }
        });
        }
      
     else if(query.audio){
        pic = query.audio;
          var imageDir='C:/Users/asfansajid/Desktop/Inventory/Audio/';
        fs.readFile(imageDir + pic, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'text/html'})
                console.log(err);
                res.end("No such Audio");    
            } else {
                //specify the content type in the response will be an image
             console.log(typeof pic);
             res.writeHead(200,{'Content-type':'audio/mp3'});
                res.end(content); 
            }
        });
        }
      
      else if(query.text){
        pic = query.text;
          var imageDir='C:/Users/asfansajid/Desktop/Inventory/Text/';
        fs.readFile(imageDir + pic, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'text/html'})
                console.log(err);
                res.end("No such Document");    
            } else {
                //specify the content type in the response will be an image
             console.log(typeof pic);
             res.writeHead(200,{'Content-type':'text/plain'});
                res.end(content); 
            }
        });
        }
      
      
  }
     
}).listen(8085);
console.log('Port 8085');

function getImages(imageDir, callback) {
    //var fileType = '.jpg',
        files = [];
    fs.readdir(imageDir, function (err, list) {
        for(var i=0; i<list.length; i++) {
            if(path.extname(list[i]) == '.jpg'||'.jpeg'||'.png'||'.gif'||'.ico') 
            {
                files.push(list[i]); //store the file name into the array files
            }
        }
        callback(err, files);
    });
}

function getAudio(imageDir, callback) {
    //var fileType = '.jpg',
        files = [];
    fs.readdir(imageDir, function (err, list) {
        for(var i=0; i<list.length; i++) {
            if(path.extname(list[i]) == '.wav'||'.mp3')//||'.png'||'.gif'||'.ico') 
            {
                files.push(list[i]); //store the file name into the array files
            }
        }
        callback(err, files);
    });
}

function getText(imageDir, callback) {
    //var fileType = '.jpg',
        files = [];
    fs.readdir(imageDir, function (err, list) {
        for(var i=0; i<list.length; i++) {
            if(path.extname(list[i]) == '.txt'||'.pdf'||'.doc'||'.docx')//||'.ico') 
            {
                files.push(list[i]); //store the file name into the array files
            }
        }
        callback(err, files);
    });
}

function getJs(imageDir, callback) {
    //var fileType = '.jpg',
        files = [];
    fs.readdir(imageDir, function (err, list) {
        for(var i=0; i<list.length; i++) {
            if(path.extname(list[i]) == '.js') 
            {
                files.push(list[i]); //store the file name into the array files
            }
        }
        callback(err, files);
    });
}