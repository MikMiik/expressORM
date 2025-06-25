"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: "userId" });
      Post.hasMany(models.Comment);
    }
  }
  Post.init(
    {
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      title: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.STRING,
      },
      postImg: {
        type: DataTypes.STRING,
      },
      publishedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
      timestamps: true,
    }
  );
  return Post;
};
