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
            "mouseenter .cover": "lift"
        },

        lift: function(event){
			var cover = $(event.target);
			
            cover.css("visibility", "hidden").zIndex(-1);
            this.$el.css("visibility", "hidden");
            cover.siblings().css("visibility", "visible");
        },

        render: function () {
            return this;
        }
    });
	
    return MenuCover;
});