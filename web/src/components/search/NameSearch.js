/**
 * Created by Nick on 6/10/2015.
 */
define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        nameTemplate = require('text!components/search/template/nameTemplate.htm');

    var NameSearch = Backbone.View.extend({

        el: nameTemplate,

    initialize: function () {
        this.render();
    },
    render: function(){
        $('#name').append(this.$el)
    }
});
    return NameSearch;
});