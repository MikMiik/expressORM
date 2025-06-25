"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post);
      User.hasMany(models.RefreshToken);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,

      email: { type: DataTypes.STRING, allowNull: false, unique: true },

      password: {
        type: DataTypes.STRING,
      },

      role: {
        type: DataTypes.ENUM("Admin", "Viewer", "Moderator"),
        defaultValue: "Viewer",
      },

      username: DataTypes.STRING,

      birthday: DataTypes.DATE,

      avatar: DataTypes.STRING,

      status: DataTypes.STRING,

      phone: DataTypes.STRING,

      gender: DataTypes.ENUM("male", "female", "other"),

      relStatus: DataTypes.STRING,

      bio: DataTypes.TEXT,

      address: DataTypes.STRING,

      blockedAt: DataTypes.DATE,

      verifiedAt: DataTypes.DATE,

      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true,
    }
  );
  return User;
};
