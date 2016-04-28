var CommentModel = require('../models/Comment');

module.exports = function() {
    this.getComments = function(req, res, next) {
        CommentModel.find({}, function(err, comments){
            if(err){
                next(err);
            } else {
                res.status(200).send(comments);
            }
        })
    };
    this.getComment = function(req, res, next){
        CommentModel.findOne({id: req.params.id}, function(err, comment){
            if(err){
                next(err);
            } else {
                res.status(200).send(comment);
            }
        })
    };
    this.addComment = function(req, res, next) {
        var comment = new CommentModel(req.body);

        comment.save(function(err, comment){
            if(err){
                next(err);
            } else {
                res.status(200).send(comment);
            }
        })
    };
    this.updateComment = function(req, res, next) {
        CommentModel.update({id: req.body.id}, req.body.id, function(err, comment){
            if(err){
                next(err);
            } else {
                res.status(200).send(comment);
            }
        })
    };
    this.deleteComment = function(req, res, next) {
        CommentModel.findOneAndRemove({id: req.body.id}, function(err){
            if(err){
                next(err);
            } else {
                res.status(200).send("Comment deleted");
            }
        })
    };

    return {
        getComments: this.getComments,
        getComment: this.getComment,
        addComment: this.addComment,
        updateComment: this.updateComment,
        deleteComment: this.deleteComment
    };
};