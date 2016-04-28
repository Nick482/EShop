define(['backbone', 'underscore', '../models/CategoryModel'], function(Backbone, _, CategoryModel) {
    return Backbone.Collection.extend({
        model: CategoryModel,
        url: '/category/'
    });
});