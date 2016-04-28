var nodemailer = require('nodemailer');
var domain = 'http://localhost:3000/customer/verify/';
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kolya.bandura@gmail.com',
        pass: ''
    }
});

module.exports = function(){
    this.byEmail = function(options){

        transporter.sendMail({
            from: "Bovt",
            to: options.email,
            subject: "Verification on Bovt",
            text: "Hello. You've registered on our shop. To finalize the registration process, please follow the link," +
                " provided below:" +
                domain + '?q=' + options.random
        });
    };

    this.byPhone = function(options){
        // Twilio stuff
    };

    return {
        byEmail: this.byEmail,
        byPhone: this.byPhone
    }
};

//var mailOptions = {
//from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
//    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
//    subject: 'Hello ✔', // Subject line
//    text: 'Hello world 🐴', // plaintext body
//    html: '<b>Hello world 🐴</b>' // html body
//};