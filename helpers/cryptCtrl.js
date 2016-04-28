var Crypto = require('crypto-js');

module.exports = function(){
    this.encryptPass = function(req, res, next){
        var body = req.body;

        body.password = Crypto.AES.encrypt(body.password, body.login);

        next();
    };

    this.decryptPass = function(req, res, next){
        var body = req.body;
        var bytes = Crypto.AES.decrypt(body.password.toString(), body.login);

        body.password = bytes.toString(Crypto.enc.Utf8);

        next();
    };

    return {
        encryptPass: this.encryptPass,
        decryptPass: this.decryptPass
    }
};