/**
 * Created by Nick on 8/18/2015.
 */
define(function(require){
    var Backbone = require("backbone"),
        $ = require("jquery"),
        _ = require('underscore'),
        menuCoverTemplate = require('text!./template/menuCoverTemplate.htm');

    var MenuCover = Backbone.View.extend({

        el: menuCoverTemplate,

        events: {
            "click .cover": "lift"
        },

        initialize: function () {
            this.render();
        },

        lift: function(event){
            $(event.target).toggle("height")
        },

        render: function () {
            $('#container').append(this.$el);
        }
    });
    return MenuCover;
});