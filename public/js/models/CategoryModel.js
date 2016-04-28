define(['backbone'], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            name: ''
        },
        idAttribute: '_id',
        urlRoot: '/category/'
    });
});