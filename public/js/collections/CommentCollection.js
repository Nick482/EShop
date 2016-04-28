define(['backbone', 'underscore', '../models/CommentModel'], function(Backbone, _, CommentModel) {
    return Backbone.Collection.extend({
        model: CommentModel,
        url: '/comment/'
    });
});