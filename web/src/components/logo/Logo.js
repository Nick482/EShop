/**
 * Created by Nick on 6/8/2015.
 */
define(function(require){
    var Backbone = require('backbone');
    var logoTemplate = require('text!components/logo/template/logoTemplate.htm');
    var $ = require('jquery');

    var Logo = Backbone.View.extend({

        el: logoTemplate,

        initialize: function(){
            this.render();
            this.initEvents();
        },
        initEvents: function(){
            (this.$el).find("img#mainLogo").on("click", function () {
                window.location = "http://localhost:3000"
            })
        },
        render: function(){
            $('#container').append(this.$el);
        }
    });
return Logo;
});