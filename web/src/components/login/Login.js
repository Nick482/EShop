/**
 * Created by Nick on 8/7/2015.
 */
define(function(require){
   var Backbone = require('backbone'),
       loginTemplate = require('text!components/login/template/loginTemplate.htm'),
       loggedTemplate = require('text!components/login/template/loggedTemplate.htm'),
       $ = require('jquery');

       var Login = Backbone.View.extend({

           el: loginTemplate,

           events: {
               "keyup input": "_onLoginCredentialsChange",
               "change input": "_onLoginCredentialsChange",
               "click #loginConfirm": "_onLoginClick"
           },

           initialize: function(){
               this.render();
           },

           _onLoginClick: function(event){
               this.trigger("login", event);
           },

           _onLoginCredentialsChange: function(event){
               var changed = {},
                   target = event.currentTarget,
                   value = $(event.currentTarget).val();

               changed[target.id] = value;

               this.trigger("login:change", changed)
           },

           loggedIn: function(){
               this.$el.remove();
               this.$el = loggedTemplate;
               this.render();
           },
           render: function(){
               $('#container').append(this.$el)
           }
       });


   return Login;
});