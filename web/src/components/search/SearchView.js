/**
 * Created by Nick on 6/9/2015.
 */
define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
		
		eventBus = require('components/eventBus'),
        searchTemplate = require('text!components/search/template/searchTemplate.htm'),
        CategorySearch = require('components/search/CategorySearch'),
        NameSearch = require('components/search/NameSearch');

    var Search = Backbone.View.extend({

        el: searchTemplate,

        events:{
            "click #SS": "_onSearch",
			"click #NS": "_onNameSearch",
			"click #GS": "_onGroupSearch"
        },

        initialize: function(){
            this.nameSearch = new NameSearch();
            this.categorySearch = new CategorySearch();
			
			this.$nameField = this.$el.find("#name");
			this.$categoryField = this.$el.find("#group");
            
            this.initEvents();
        },

        initEvents: function(){
			var self = this;
        },
		
		_onNameSearch: function(){
			this.$nameField.toggle("slow");
		},
		
		_onGroupSearch: function(event){
			this.$categoryField.toggle("slow");
		},
				
        _onSearch: function(){
			var searchCondition = {
				name: this.nameSearch.nameCondition,
				group: this.categorySearch.collection.map(function(model) {
					return model.get("name")
				})
			}
			
            eventBus.trigger("search", searchCondition);
        },
		
        render: function(){
            this.$el.find('#name').append(this.nameSearch.render().$el);
			this.$el.find('#group').append(this.categorySearch.render().$el);
			
			return this;
        }
    });
	
	return Search;
});
