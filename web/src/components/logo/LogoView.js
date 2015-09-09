/**
 * Created by Nick on 6/8/2015.
 */
define(function(require) {
	
    var Backbone = require('backbone'),
		$ = require('jquery'),
	
    	logoTemplate = require('text!components/logo/template/logoTemplate.htm');
    	
    var Logo = Backbone.View.extend({

        el: logoTemplate,
		
		events: {
			"click": "_onClick"
		},
		
        _onClick: function(){
			window.location = "http://localhost:3000"
        },
		
        render: function(){
            return this;
        }
    });
	
	return Logo;
	
});