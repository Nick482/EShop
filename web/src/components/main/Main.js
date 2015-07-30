/**
 * Created by Nick on 6/23/2015.
 */
define(function(require){
    var Backbone = require('backbone'),
        mainTemplate = require('text!components/main/template/mainTemplate.htm'),
        Search = require('components/search/Search'),
        Logo = require('components/logo/Logo'),
        Menu  = require('components/menu/MainMenu'),
        ItemCollection = require('components/itemCollection/ItemCollection'),
        itemTemplate = require('text!components/item/template/itemTemplate.htm'),
        itemModel = require('components/main/model/itemModel');

    var Main = Backbone.View.extend({

        el: mainTemplate,

    initialize: function(){
    this.searchCond = {};
    this.logo = new Logo();
    this.search = new Search();
    this.menu = new Menu();
    this.itemCollection = new ItemCollection({
            model: itemModel,
            itemTemplate: "<div></div>",
            itemAdditionalCssClass: "gridItem"
        });
    this.render();
    this.initEvents();
    },
    initEvents: function() {
        var self = this;
        this.$el.find(".searchField").hide();
        this.searchCond.catCond = [];
        this.listenTo(this.search, "change", function(){
            var j = this.searchCond.catCond;
            if ( j.indexOf(event.target.id) == -1){
                j.push(event.target.id);
                console.log(j)
            }
            else {j.splice(j.indexOf(event.target.id), 1);
                console.log(j)}
        });
        this.listenTo(this.search, "click", function(){
            $.post("/search", this.searchCond).statusCode({
                256: function(data){
                    console.log(data);
                    self.itemCollection.resetCollection(data);
                    self.itemCollection.render();
                    }
                }
            )
        });
        this.listenTo(this.search, "keyup", function(){
            this.searchCond.nameCond = event.target.value;
        })
    },
    render: function(){
        $("body").append(this.$el);
        this.$el.append(this.logo.render());
        this.$el.append(this.search.render());
        this.$el.append(this.menu.render());
        this.$el.append(this.itemCollection.render().$el);
    }
    });
    return Main;
});