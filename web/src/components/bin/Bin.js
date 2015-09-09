define(function(require){

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        binTemplate = require("text!./template/binTemplate.htm");

    var Bin = Backbone.View.extend({
		
		id: "bin",

        events: {
            "click" : "_onClick"
        },

        constructor: function(){
            this.items = [];
            
			Backbone.View.apply(this, arguments);
        },

        _onClick: function(){
            this.trigger("click:bin");
        },

        update: function(items){
            this.$el.empty();
            this.$el.html(_.template(binTemplate)({
				items: items
			}));
        },

        render: function(){
            this.$el.html(_.template(binTemplate)({
				items: this.items
			}));
			
            return this;
        }
    });
	
    return Bin;
	
});