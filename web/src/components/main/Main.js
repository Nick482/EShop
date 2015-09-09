/**
 * Created by Nick on 6/23/2015.
 */
define(function(require) {
	
    var Backbone = require('backbone'),
		
		eventBus = require('components/eventBus'),
		
		LeftSideBar = require('components/sidebar/LeftSideBar'),
		ContentView = require('components/contentView/ContentView'),
		RightSideBar = require('components/sidebar/RightSideBar'),
		
		requestHandler = require('components/helpers/requestHandler'),
	
		mainTemplate = require('text!components/main/template/mainTemplate.htm');

        require('jquery.ui');

    var Main = Backbone.View.extend({

        el: mainTemplate,

		initialize: function(){
			this.leftSideBar = new LeftSideBar();
			this.contentView = new ContentView();
			this.rightSideBar = new RightSideBar();

			this.render();
			this.initEvents();
		},
		
		initEvents: function() {
			var self = this;
			
			this.listenTo(eventBus, "search", function(searchCondition){
				requestHandler.search(searchCondition).done(function(data){
					self.contentView.resetData(data);
				});
			});
			
			this.listenTo(eventBus, "search:subCategory", function(condition){
				requestHandler.subCategorySearch(condition).done(function(data){
					self.contentView.resetData(data);
				});
			});

			self.listenTo(eventBus, "addToCart", function(view){
				self.rightSideBar.addBinItem(view.model);
			});
			
		
			this.listenTo(eventBus, "login", function(model){
				requestHandler.login(model).done(function(data) {
					model.set(data);
					self.rightSideBar.loginView.loggedIn();
				}).fail(function(data, status) {
					// TODO
				});
			});
			
		},
		
		render: function(){
			this.$el.append(this.leftSideBar.render().$el);
			this.$el.append(this.contentView.render().$el);
			this.$el.append(this.rightSideBar.render().$el);
			
			$("body").append(this.$el);
		}
    });
    return Main;
});