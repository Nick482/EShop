define(['backbone'], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            userID: '',
            items: [],
            total: 0
        },
        urlRoot: '/order/'
    })
});