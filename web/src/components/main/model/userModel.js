/**
 * Created by Nick on 8/7/2015.
 */
define(function(require){

    var Backbone = require('backbone');

    var UserModel = Backbone.Model.extend({

        defaults: {
            login: "",
            password: "",
            email: "",
            items: ""
        }
    });

    return UserModel
});