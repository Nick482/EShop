define(function(require) {
	
	var Backbone = require('backbone'),
		
		CategoryModel = require("components/model/CategoryModel");
	
	return Backbone.Collection.extend({
		model: CategoryModel
	});
	
});