/**
 * Created by Nick on 6/13/2015.
 */
define(function(require){
    var Backbone = require('backbone'),
        $ = require ('jquery'),
		
		CategoryCollection = require('components/collection/CategoryCollection'),
        categoryTemplate = require('text!components/search/template/categoryTemplate.htm');

    var CategorySearch = Backbone.View.extend({

        el: categoryTemplate,
		
		events: {
			"click": "_onCheckboxChange"
		},
		
		initialize: function(){
			this.collection = new CategoryCollection();
		},
		
		_onCheckboxChange: function(event) {
			var checkbox = $(event.target),
				categoryName = checkbox.attr("id"),
				checked = checkbox.prop("checked");
			
			var model = this.collection.findWhere({name: categoryName});
			
			if (checked && !model) {
				this.collection.add({name: categoryName});
			}
			
			if(!checked && model) {
				this.collection.remove(model);
			}
		},
		
        render: function(){
            return this;
        }
    });
	
    return CategorySearch;
});