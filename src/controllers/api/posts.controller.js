const postsService = require("@/services/posts.service");
const throw404 = require("@/utils/throw404");

exports.getList = async (req, res) => {
  const result = await postsService.getAll(req.page, req.limit);
  if (!result) throw404();
  res.success(200, result);
};

exports.getOne = async (req, res) => {
  const data = {
    ...req.post.dataValues,
  };
  res.success(200, data);
};

exports.create = async (req, res) => {
  const post = await postsService.create(req.body);
  res.success(201, post);
};

exports.update = async (req, res) => {
  const post = await postsService.update(req.post.id, req.body);
  res.success(200, post);
};

exports.remove = async (req, res) => {
  await postsService.remove(req.post.id);
  res.success(204);
};
