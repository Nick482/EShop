define(['backbone', 'underscore', './UserModel'], function(Backbone, _, UserModel){
    return UserModel.extend({
        defaults: _.extend({}, UserModel.prototype.defaults, {
        }),
        urlRoot: '/admin/'
    })
});