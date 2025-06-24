module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
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
      tableName: "posts",
      timestamps: true,
    }
  );

  Post.associate = (db) => {
    Post.belongsTo(db.User, { as: "user", foreignKey: "userId" });
  };

  return Post;
};
