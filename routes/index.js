var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// comment out below line for prod.
// var config= require('./config')
var xoauth2 = require('xoauth2')
var smtpTransport = require('nodemailer-smtp-transport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Louis Ritter | Web Developer' });
});
router.get('/about', function (req, res) {
  res.render('about');
});
router.get('/portfolio', function (req, res) {
  res.render('portfolio');
});
router.get('/contact', function (req, res) {
  res.render('contact');
});

router.post('/send',function(req,res,next){
var transport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
                user: process.env.mailUser,
                clientId: process.env.clientId,
                clientSecret: process.env.clientSecret,
                refreshToken: process.env.refreshToken
                // comment out below lines for prod.
                // user: config.mailUser,
                // clientId: config.clientId,
                // clientSecret: config.clientSecret,
                // refreshToken: config.refreshToken
            })
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
}))

	 var mailOptions={
        from : req.body.name,
        to : 'louritter1@gmail.com',
        subject : 'Web Submit',
        text : "new submission with the following details: Name:"+req.body.name+" email: "+req.body.mail + " message: "+ req.body.comment,
   		html: "<p>YOU HAVE A NEW SUBMIT: <ul><li>Name: "+req.body.name+"</li><li> Email: "+req.body.mail+"   Phone: "+req.body.phone+"</li><li>Message: "+req.body.comment+"</li></ul></p>",
    }
    console.log(mailOptions);
    transport.sendMail(mailOptions, function(error, info){
     if(error){
            console.log(error);
        	res.redirect("/contact");
     }else{
            console.log("Message sent: " + info.response);
        	res.redirect("/contact");
         }
});
});

module.exports = router;