const { Comment } = require("@/models");
class CommentsService {
  async getAll() {
    const comments = await Comment.findAll();
    return comments;
  }

  async getById(id) {
    const comment = await Comment.findByPk(id, {
      include: [
        { model: Comment, as: "replies" },
        { model: Comment, as: "parent" },
      ],
    });
    return comment;
  }

  async create(data) {
    const comment = await Comment.create(data);
    return comment;
  }

  async update(id, data) {
    const comment = await Comment.update(data, { where: { id } });
    console.log(comment);
    return comment;
  }

  async remove(id) {
    const result = await Comment.destroy({ where: { id } });
    return result;
  }
}

module.exports = new CommentsService();
