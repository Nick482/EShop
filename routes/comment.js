var CommentHandler = require('../handlers/commentHandler');
var express = require('express');
var router = express.Router();
var Validate = require('../helpers/validate');

module.exports = function() {
    var commentHandler = new CommentHandler();
    var validate = new Validate();

    router.get('/', commentHandler.getComments);
    router.get('/:id', commentHandler.getComment);
    router.post('/', validate.comment, commentHandler.addComment);
    router.put('/', commentHandler.updateComment);
    router.delete('/:id', commentHandler.deleteComment);

    return router;
};