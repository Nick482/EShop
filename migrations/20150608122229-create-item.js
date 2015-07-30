"use strict";
module.exports = {
    up: function(migration, DataTypes, done) {
        migration.createTable("Items", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING
            },
            group: {
                type: DataTypes.STRING
            },
            subgroup: {
                type: DataTypes.STRING
            },
            image: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.FLOAT
            },
            code: {
                type: DataTypes.INTEGER
            },
            remaining: {
                type: DataTypes.INTEGER
            },
            maker: {
                type: DataTypes.STRING
            }
        });
    },
    down: function(migration, DataTypes) {
        migration.dropTable("Items");
    }
};
