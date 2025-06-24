const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
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
      tableName: "users",
      timestamps: true,
    }
  );

  User.associate = (db) => {
    User.hasMany(db.Post);
  };

  return User;
};
