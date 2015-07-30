/**
 * Created by Nick on 6/9/2015.
 */
define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        searchTemplate = require('text!components/search/template/searchTemplate.htm'),
        CategorySearch = require('components/search/CategorySearch'),
        NameSearch = require('components/search/NameSearch');

    var Search = Backbone.View.extend({

        el: searchTemplate,

        events:{
            "click #SS": "send",
            "click .categories": "change",
            "keyup #nameInput": "nsc"
        },

        initialize: function(){
            this.nameSearch = new NameSearch();
            this.categorySearch = new CategorySearch();
            this.render();
            this.initEvents();
        },

        initEvents: function(){
            this.$el.find("#NS").on("click", function(){
                $("#name").toggle("slow");
            });
            this.$el.find("#GS").on("click", function(){
                $("#group").toggle("slow");
            });
            this.$el.find("#PS").on("click", function(){
                $("#price").toggle("slow");
            });
            this.$el.find("#MS").on("click", function(){
                $("#maker").toggle("slow");
            });
        },
        send: function(event){
            this.trigger("click", this, event)
        },
        change: function(event){
            this.trigger("change", this, event)
        },
        nsc: function(event){
            this.trigger("keyup", this, event)
        },
        render: function(){
            $('#container').append(this.$el);
            this.nameSearch.render();
            this.categorySearch.render();
        }
    });
return Search;
});
