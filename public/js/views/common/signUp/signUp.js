define(['backbone', 'jquery', 'text!/templates/main/signUpTemplate.html', 'models/CustomerModel'],
    function(Backbone, $, signUpTemplate, CustomerModel){
    return Backbone.View.extend({

        events: {
            'keyup': '_change',
            'click #confirmButton': '_confirm',
            'click .verificationType': '_pickType'
        },

        el: signUpTemplate,

        initialize: function(){
            this.customerModel = new CustomerModel();

            this.render();
        },

        _change: function(event){
            var attr = $(event.target).data('attr');
            var attrValue = $(event.target).val();
            this.customerModel.set(attr, attrValue);
            console.log(this.customerModel);
        },

        _confirm: function(event){
            console.log(this.customerModel);
            this.customerModel.save();
        },

        _pickType: function(event){
            var $target = $(event.target);
            var $ver = $target.attr('class');
            var $type = $target.data('type');

            this.customerModel.set($ver, $type);

            this.$el.find('.typeCheck').html('Thank you, when finished, you will receive a link/code on your ' +
                $type + '.')
        },

        render: function(){

            return this;
        }
    });
});