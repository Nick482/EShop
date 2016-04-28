define(['backbone', 'underscore', '../models/AdminModel'], function(Backbone, _, AdminModel) {
    return Backbone.Collection.extend({
        model: AdminModel,
        url: '/admin/'
    });
});