/**
 * Created by Nick on 6/13/2015.
 */
define(function(require){
    var Backbone = require('backbone'),
        $ = require ('jquery'),
        categoryTemplate = require('text!components/search/template/categoryTemplate.htm');

    var CategorySearch = Backbone.View.extend({

        el: categoryTemplate,

        events: {
            "change": "catSet"
        },
        initialize: function(){
            this.render();
        },
        catSet: function (event) {
                this.trigger("change", this, event);
        },
        render: function(){
            $('#group').append(this.$el);
        }
    });
    return CategorySearch;
});