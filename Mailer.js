var http=require('http');
var nodemailer = require('nodemailer');

http.createServer(function(req,res){
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: 'admn.hotelsail@gmail.com',
        pass: 'Password@123'
    }
});


var mailOptions = {
    from: 'admn.hotelsail@gmail.com', 
    to: 'sushmithajogula96@gmail.com, asfansd@gmail.com', 
    subject: 'Successfully registered!', 
    text: 'Welcome to Multimedia ', 
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
       console.log(error);
    }
    else{	   
	 console.log('Message  sent');
    }	
});
}).listen(8086);