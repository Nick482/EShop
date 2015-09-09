/**
 * Created by Nick on 7/19/2015.
 */
define(function(require){
    var Backbone = require('backbone');

    var ItemModel = Backbone.Model.extend({
    defaults: {
        name: "",
        group: "",
        subgroup: "",
        image: "",
        price: 0,
        code: 0,
        remaining: 0,
        maker: ""
    }
    });
    return ItemModel
});