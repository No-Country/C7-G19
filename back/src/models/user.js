const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
    id : {
      type : DataTypes.INTEGER,
      autoIncrement: true,
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
    mail : {
      type : DataTypes.STRING,
      allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
      },
    phone : {
      type : DataTypes.STRING,
      allowNull : false
    },
    location : {
      type : DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM("active", "removed"),
        defaultValue: "active",
        allowNull: false,
      },
  });
};