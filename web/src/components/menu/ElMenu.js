/**
 * Created by Nick on 6/8/2015.
 */
define(function(require){
    var Backbone = require("backbone"),
        $ = require("jquery"),
        menuTemplate = require("text!/template/menuTemplate.htm");

    var ElMenu = Backbone.view.extend({
        el: menuTemplate,

        initialize: function(){



            this.initEvents();
            this.render();
        },
        initEvents: function(){


        },
        render: function(){
            this.render();
        }
    });
    return ElMenu;
});