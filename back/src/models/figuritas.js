const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('figurita', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey: true,
      allowNull : false
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    lastName : {
        type : DataTypes.STRING,
        allowNull : false
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
      allowNull : false
    },
  },
  { timestamps: false }
  );
};