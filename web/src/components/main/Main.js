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
        itemTemplate = require('text!components/main/template/itemTemplate.htm'),
        binItemTemplate = require('text!components/bin/template/binItemTemplate.htm'),
        itemModel = require('components/main/model/itemModel'),
        Selected = require('components/selected/Selected'),
        UserModel = require('components/main/model/userModel'),
        Bin = require('components/bin/Bin'),
        BinPage = require('components/bin/BinPage'),
        MenuCover = require('components/menu/MenuCover'),
        Login = require('components/login/Login');

        require('jquery.ui');

    var Main = Backbone.View.extend({

        el: mainTemplate,

    initialize: function(){
    this.model = new UserModel();
    this.searchCond = {};
    this.logo = new Logo();
    this.search = new Search();
    this.menu = new Menu();
    this.menuCover = new MenuCover();
    this.selected = new Selected();
    this.itemCollection = new ItemCollection({
            model: itemModel,
            itemTemplate: itemTemplate,
            itemAdditionalCssClass: "gridItem"
    });
    this.login = new Login();
    this.bin = new Bin({"length": 0});
    this.binPage = new BinPage({
        model: itemModel,
        itemTemplate: binItemTemplate
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
                    self.itemCollection.resetCollection(data);
                    self.itemCollection.render();
                    }
                }
            )
        });
        this.listenTo(this.menu, "menuClick", function(event){
                var menuCondition = {
                    subCond: $(event.target).data("category")
                };
                console.log(menuCondition);
                $.post('/menuPick', menuCondition).statusCode({
                    246: function(data){
                        alert(data)
                    },
                    247: function(data){
                        self.itemCollection.resetCollection(data);
                        self.itemCollection.render();
                    }
                })
            }
        );
        this.listenTo(this.search, "keyup", function(){
            this.searchCond.nameCond = event.target.value;
        });
        self.listenTo(self.selected, "addToCart", function(model){
            self.binPage.addItem(model.model);
            self.bin.update({length: self.binPage.getItemsLength()});
        });
        self.listenTo(self.selected, "backToSearch", function(){
            self.selected.$el.toggle("slide", { direction: "right" }, 1000);
            $('.itemsCollection').animate({width: 'toggle'}, 1000);
        });
        this.listenTo(this.itemCollection, "item:selected", function(itemView, model){
            console.log(arguments);
                    self.selected.$el.hide();
                    $('.itemsCollection').animate({width: 'toggle'}, 1000);
                    self.selected.setModelData(model.toJSON());
                    self.selected.$el.hide();
                    self.selected.$el.toggle("slide", { direction: "right" }, 1000);
            });
        this.listenTo(this.bin, "clickBin", function(event){
            $('#binList').toggle("slow");
        });
        this.listenTo(this.login, "login:change", function(changed){
                this.model.set(changed);
        });
        this.listenTo(this.login, "login", function(){
            $.post("/users/login", this.model.toJSON()).statusCode({
                256: function(data){
                    self.model.set(data);
                    self.login.loggedIn();
                },
                257: function(data){
                    alert(data)
                },
                258: function(data){
                    alert(data)
                }
            })
        });
    },
    render: function(){
        $("body").append(this.$el);
        this.$el.append(this.logo.render());
        this.$el.append(this.search.render());
        this.$el.append(this.menu.render());
        this.$el.append(this.login.render());
        this.$el.append(this.bin.render());
        this.$el.append(this.menuCover.render());
        this.$el.append(this.binPage.render());
        this.$el.append(this.itemCollection.render().$el);
    }
    });
    return Main;
});