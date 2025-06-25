"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Post, { foreignKey: "postId" });
      Comment.belongsTo(models.Comment, {
        foreignKey: "parentId",
        as: "parent",
      });
      Comment.hasMany(models.Comment, {
        foreignKey: "parentId",
        as: "replies",
      });
      Comment.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Comment.init(
    {
      userId: DataTypes.INTEGER.UNSIGNED,
      parentId: DataTypes.INTEGER.UNSIGNED,
      postId: DataTypes.INTEGER.UNSIGNED,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",
      timestamps: true,
    }
  );
  return Comment;
};
