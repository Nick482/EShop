/**
 * Created by Nick on 8/18/2015.
 */
define(function(require){
    var Backbone = require('backbone');

    var MenuModel = Backbone.Model.extend({

    defaults: {
        houseApp: ["Refrigerators", "Kettles", "TV", "Conditioners", "Washing machines"],
        pc: ["Motherboards", "GPU", "CPU", "HDD", "SSD", "PSU", "RAM"],
        furniture: ["Beds", "Chairs", "Tables"],
        cellphones: ["Nokia", "Apple", "Samsung", "HTC"]
    }
    });
    return MenuModel;
});