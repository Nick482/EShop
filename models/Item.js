/**
 * Created by Nick on 6/8/2015.
 */
module.exports = function (sequelize, DataTypes){
  var Item = sequelize.define("Item",{
      name: DataTypes.STRING,
      group: DataTypes.STRING,
      subgroup: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      code: DataTypes.INTEGER,
      remaining: DataTypes.INTEGER,
      maker: DataTypes.STRING
  },
      {classMethods: {
          associate: function(){

          }
      }
      });
    return Item
};