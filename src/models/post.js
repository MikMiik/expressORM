"use strict";
const slugify = require("slugify");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { as: "author", foreignKey: "userId" });
      Post.hasMany(models.Comment, { as: "comments" });
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
        unique: true,
        allowNull: "false",
        defaultValue: "none",
      },
      topic: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.STRING,
      },
      postImg: {
        type: DataTypes.STRING,
        defaultValue:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
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
      defaultScope: {
        attributes: {
          exclude: ["UserId"],
        },
      },
      hooks: {
        beforeCreate: (post, options) => {
          if (post.title) {
            post.slug = slugify(post.title, { lower: true, strict: true });
          }
        },
      },
    }
  );
  return Post;
};
