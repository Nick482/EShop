/**
 * Created by Nick on 8/7/2015.
 */
define(function(require){
	
	var Backbone = require('backbone'),
		loginTemplate = require('text!components/login/template/loginTemplate.htm'),
		loggedTemplate = require('text!components/login/template/loggedTemplate.htm'),
		UserModel = require('components/main/model/UserModel'),
		eventBus = require('components/eventBus'),
		$ = require('jquery');

	var Login = Backbone.View.extend({

		el: loginTemplate,

		events: {
			"keyup input": "_onLoginCredentialsChange",
			"change input": "_onLoginCredentialsChange",
			"click #loginConfirm": "_onLoginClick"
		},

		initialize: function() {
			this.userModel = new UserModel();
		},

		_onLoginClick: function(){
			eventBus.trigger("login", this.userModel);
		},

		_onLoginCredentialsChange: function(event){
			var changed = {},
			   target = event.currentTarget,
			   value = $(event.currentTarget).val();

			changed[target.id] = value;

			this.userModel.set(changed);
		},

		loggedIn: function(){
			this.$el.remove();
			this.$el = loggedTemplate;
			this.render();
		},

		render: function(){
			return this;
		}
	});


	return Login;
});