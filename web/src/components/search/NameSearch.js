/**
 * Created by Nick on 6/10/2015.
 */
define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        nameTemplate = require('text!components/search/template/nameTemplate.htm');

    var NameSearch = Backbone.View.extend({

        el: nameTemplate,
		
		events: {
			"keyup": "_onKeyUp"
		},
		
		initialize: function() {
			this.nameCondition = "";
		},
		
		_onKeyUp: function(event) {
			this.nameCondition = $(event.target).val();
		},
		
		render: function(){
			return this;
		}
	});
	
    return NameSearch;
});