define(['backbone'], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            content: '',
            userID: '',
            productID: '',
            date: ''
        },
        urlRoot: '/comment/'
    })
});