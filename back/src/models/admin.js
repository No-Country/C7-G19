const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("admin", {
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        { timestamps: false }
      );
    };
    