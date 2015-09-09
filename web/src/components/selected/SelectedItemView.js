define(function(require){

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        selectedTemplate = require("text!./template/selectedTemplate.htm"),
		eventBus = require('components/eventBus'),
        ItemModel = require('components/main/model/ItemModel');


    var Selected = Backbone.View.extend({

        el: function(){
            var self = this;
            return	_.template("<div id='selectedItem' style='display:none' code='<%= options.code %>'></div>")({
                options: self.model.toJSON()
            });
        },

        events: {
            "click #back" : "_backToSearchView",
            "click #addToCart": "_addToCart"
        },

        constructor: function(data){
            this.model = new ItemModel(data || {});
            
			Backbone.View.apply(this, arguments);
        },
		
        _backToSearchView: function(){
			this.trigger("backToSearch");
        },

		toggle: function(){
			this.$el.toggle("slide", { direction: "right" }, 1000);
		},
		
		hide: function(){
			this.$el.hide();
		},
		
        _addToCart: function(){
            eventBus.trigger("addToCart", this, this.model)
        },

        setModelData: function(data){
            this.model.set(data);
            this.render();
        },

        render: function(){
            this.$el.html(_.template(selectedTemplate)({options: this.model.toJSON()}));
            return this;
        }
    });
    return Selected;
});
