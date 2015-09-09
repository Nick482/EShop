define(function(require){

	var Backbone = require('backbone'),
		
		LogoView = require('components/logo/LogoView'),
		SearchView = require('components/search/SearchView');
		
	return Backbone.View.extend({
	
		className: "leftSideBar",
		
		initialize: function(){
			this.logoView = new LogoView();
			this.searchView = new SearchView();
		},
		
		render: function(){
			this.$el.append(this.logoView.render().$el);
			this.$el.append(this.searchView.render().$el);
			
			return this;
		},
		
		remove: function(){
			this.logoView.remove();
			this.searchView.remove();
			
			Backbone.View.prototype.remove.apply(this, arguments);
		}
		
	});


});