const Post = require("@/models/posts.model");
class PostsService {
  async getAll() {
    const posts = await Post.findAll({ limit: 5 });
    return posts;
  }

  async getById(id) {
    const post = await Post.findByPk(id);
    return post;
  }

  async create(data) {
    const post = await Post.create(data);
    return post;
  }

  async update(id, data) {
    const post = await Post.update(data, { where: { id } });
    console.log(post);
    return post;
  }

  async remove(id) {
    const result = await Post.destroy({ where: { id } });
    return result;
  }
}

module.exports = new PostsService();
