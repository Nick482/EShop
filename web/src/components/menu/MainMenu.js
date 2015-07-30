/**
 * Created by Nick on 6/8/2015.
 */
define(function(require){
   var Backbone = require("backbone"),
       $ = require("jquery"),
       menuTemplate = require("text!./template/menuTemplate.htm");

   var MainMenu = Backbone.View.extend({

       el: menuTemplate,

   initialize: function(){
       this.render();
       this.initEvents();
   },
   initEvents: function(){


   },
   render: function(){
   $('#container').append(this.$el);
   }
});
    return MainMenu;
});