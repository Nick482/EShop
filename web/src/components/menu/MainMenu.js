/**
 * Created by Nick on 6/8/2015.
 */
define(function(require){
   var Backbone = require("backbone"),
       $ = require("jquery"),
       _ = require('underscore'),
       menuTemplate = require("text!./template/menuTemplate.htm"),
       MenuModel = require('components/main/model/MenuModel');

   var MainMenu = Backbone.View.extend({

       el: menuTemplate,

       events: {
           "click .subCategory": "click"
       },


       initialize: function () {
           this.menuModel = new MenuModel().toJSON();
           this.render();
       },

       click: function(){
           console.log("triggered")
       },

       render: function () {
           $('#container').append(this.$el);
           _.each(this.menuModel, function(Group, i) {
               _.each(Group, function (subGroup) {
                   $("." + i).append("<div  data-category='" + subGroup + "'   class='"+ i +"List subCategory' id ='" + subGroup + "'>"+ subGroup +" </div>")
               });
           });
//           _.each(this.$el.children(), function (child) {
//               _.each(menuModel, function (Group, i) {
//                       _.each(Group, function (subGroup) {
//                           $(child).append("<div class='" + subGroup + "'></div>")
//                       })
//})
//           });
       }
});
    return MainMenu;
});