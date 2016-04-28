var fs = require('fs');
var util = require('util');
var multiparty = require('multiparty');

module.exports = function(){
    this.saveImage = function(req, res, next) {
        var body = req.body;
        var id = req.body.id;
        var uploadFile = {path: '', size: '', type: ''};
        var allowedTypes = ['jpg', 'png'];
        var form = new multiparty.Form({uploadDir: 'public/images'});

        form.on('error', function(err){
            console.log(err);
        });
        form.on('field', function(fieldname, field){
            body[fieldname] = field;
        });
        form.on('file', function(filename, file){
            console.log(file.originalFilename);
            uploadFile.type = file.originalFilename.split('.').pop();
            if(allowedTypes.indexOf(uploadFile.type >= 0)){
                uploadFile.path = 'images/' + file.path.split('\\').pop();
                console.log(file);
                console.log(uploadFile);
                body.image = uploadFile.path;
            } else {
                var err = new Error("Image should be of .png or .jpg format");

                return next(err)
            }
        });
        form.on('close', function(){
            console.log('closed');
            next();
        });
        form.parse(req);
    }
};