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
            "mouseenter .cover": "lift",
            "mouseleave": "lower"
        },

        initialize: function () {
            this.render();
        },

        lift: function(event){
            $(event.target).css("visibility", "hidden");
            $(event.target).siblings().css("visibility", "visible")
        },
        lower: function(event){
            $(event.target).children().css("visibility", "visible")
        },

        render: function () {
            $('#container').append(this.$el);
        }
    });
    return MenuCover;
});