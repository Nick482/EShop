var AdminModel = require('../models/Admin');
var Customer = require('../models/Customer');

module.exports = function(){
    this.checkCustomer = function(req, res, next) {
        var session = req.session;
        if(!session.id){
            res.status(401).send("Not logged in");
        } else {
            return next();
        }
    };

    this.checkAdmin = function(req, res, next) {
        var session = req.session;
        if(!session.userID){
            res.redirect('/');
        } else {
            AdminModel.findOne({_id : session.userID}, function(err, admin){
                if(err){
                    return next(err);
                } else {
                    if(!admin){
                        res.redirect('/');
                    } else {
                        next();
                    }

                }
            })
        }
    };

    return {
        checkCustomer: this.checkCustomer,
        checkAdmin: this.checkAdmin
    }
};