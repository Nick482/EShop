var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res){
    User.find({where: {login: req.body.login}}).then(function(user){
        if(!user){
            res.status(257).send("User not Found")
        }
        else if(user.password !== req.body.password){
            res.status(258).send("Password incorrect")
        }
        else {
            res.status(256).send(user)
        }
    })

});



module.exports = router;
