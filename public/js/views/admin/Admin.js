define(['backbone', 'jquery', 'text!/templates/admin/adminTemplate.html',
'./adminSections.js', './adminControlSection.js', 'views/common/logOut/logOut'],
    function(Backbone, $, adminTemplate, AdminSectionControl, AdminControlSection, LogOut){
        return Backbone.View.extend({

            el: adminTemplate,

            initialize: function(){
                this.adminSections = new AdminSectionControl();
                this.adminControlSection = new AdminControlSection();
                this.logOut = new LogOut();

                this.render();
                this.initEvents();
            },

            initEvents: function(){
                var self = this;
                this.adminSections.on('selectSection', function(event){
                // Re-render, or "hidden" manipulation
                });
            },

            render: function(){
                this.$el.append(this.adminSections.$el);
                this.$el.append(this.adminControlSection.$el);
                this.$el.append(this.logOut.$el);

                $('body').append(this.$el)
            }
        });
    }
);