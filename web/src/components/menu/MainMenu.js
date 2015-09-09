/**
 * Created by Nick on 6/8/2015.
 */
define(function(require){
   var Backbone = require("backbone"),
       $ = require("jquery"),
       _ = require('underscore'),
	   
	   eventBus = require('components/eventBus'),
       menuTemplate = require("text!./template/menuTemplate.htm"),
       MenuModel = require('components/main/model/MenuModel');

   var MainMenu = Backbone.View.extend({

       el: function() {
		   return _.template(menuTemplate)({
			   menuModel: new MenuModel().toJSON()
		   });
	   },

       events: {
           "click .subCategory": "_onSubCategoryClick"
       },

       _onSubCategoryClick: function(event){
		   var searchCondition = $(event.target).data("category");
		   
           eventBus.trigger("search:subCategory", {
			   subCond: searchCondition
		   });
       },

       render: function () {
		   return this;
       }
	   
   	});
	
    return MainMenu;
});