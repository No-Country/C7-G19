const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('card', {
    price : {
      type : DataTypes.INTEGER,
    },
    status : {
        type : DataTypes.ENUM("vendida", "noVendida"),
        defaultValue: "noVendida",
    },
    method: {
        type : DataTypes.ENUM("cambio", "vendo"),
    },
    description: {
        type: DataTypes.TEXT
    }
  },
  );
};