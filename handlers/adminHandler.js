var AdminModel = require('../models/Admin');

module.exports = function(){
    this.renderAdmin = function(req, res, next){
        res.render('admin', {title: "Admin Page"});
    };

    this.createAdmin = function(req, res, next){
        var admin = new AdminModel(req.body);

        admin.save(function(err, admin){
            if(err){

                return next(err);
            } else {
                res.status(201).send(admin);
            }
        });
    };

    this.login = function(req, res, next){
        var body = req.body;

        AdminModel.findOne({email: body.email}, function(err, admin){
            if(err){
                return next(err);
            } else {
                if(!admin){

                    return res.status(400).send("Admin with specified email not found")
                }
                if(admin.password !== body.password){
                    res.status(400).send('password incorrect');
                } else {
                    req.session.userID = admin._id;
                    req.session.save();
                    res.send(admin);
                }
            }
        })
    };

    this.updateAdmin = function(req, res, next){
        var id = req.params.id;

        AdminModel.findByIdAndUpdate(id,
        req.body,
        function(err, admin){
            if(err){
                return next(err);
            } else {
                res.status(200).send(admin);
            }
        }
        )
    };

    this.deleteAdmin = function(req, res, next){
        var id = req.params.id;

        AdminModel.findByIdAndRemove(id,
        function(err, admin){
            if (err){
                return next(err);
            } else {
                res.send(200).send(admin);
            }
        })
    };

    return {
        renderAdmin: this.renderAdmin,
        createAdmin: this.createAdmin,
        login: this.login,
        updateAdmin: this.updateAdmin,
        deleteAdmin: this.deleteAdmin
    }
};