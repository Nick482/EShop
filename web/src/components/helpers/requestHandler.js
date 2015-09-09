define(function(require){

	var Backbone = require('backbone'),
		$ = require('jquery'),
		
		routesEnum = require('components/enum/routesEnum');

	return {

		login: function(model)	{
			var dfd = new $.Deferred();

			$.post(routesEnum.USERS_LOGIN, model.toJSON()).statusCode({
				256: function(data){
					dfd.resolve(data);
				},
				257: function(data){
					alert(data);
					dfd.reject(data, 257);
				},
				258: function(data){
					alert(data);
					dfd.reject(data, 258);
				}
			});

			return dfd;
		},
		
		search: function(searchCondition){
			var dfd = new $.Deferred();
			
			$.post(routesEnum.SEARCH, searchCondition).statusCode({
				256: function(data){
					dfd.resolve(data);
				}
			});
			
			return dfd;
		},
		
		subCategorySearch: function(condition){
			var dfd = new $.Deferred();
			
			$.post(routesEnum.SUB_CATEGORY_SEARCH, condition).statusCode({
				246: function(data){
					dfd.reject(data);
				},
				247: function(data){
					dfd.resolve(data);
				}
			});
			
			return dfd;
		}
	}

});