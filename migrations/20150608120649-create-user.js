"use strict";
module.exports = {
    up: function(migration, DataTypes, done) {
        migration.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            login: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            items: {
                type: DataTypes.ARRAY(DataTypes.DECIMAL)
            }
        })
    },
    down: function(migration, DataTypes) {
        migration.dropTable("Users")
    }
};
