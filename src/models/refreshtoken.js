"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    static associate(models) {
      RefreshToken.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  RefreshToken.init(
    {
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      expiredAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "RefreshToken",
      tableName: "refreshTokens",
      timestamps: true,
    }
  );
  return RefreshToken;
};
