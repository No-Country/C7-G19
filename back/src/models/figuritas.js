const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('figurita', {
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    lastname : {
        type : DataTypes.STRING,
      },
    img : {
      type : DataTypes.STRING,
      allowNull : false
    },
    team : {
      type : DataTypes.STRING,
      allowNull : false
    },
    position : {
      type : DataTypes.STRING,
    },
  },
  { timestamps: false }
  );
};