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
    },
    {
      tableName: "posts",
      timestamps: true,
    }
  );
  return Post;
};
