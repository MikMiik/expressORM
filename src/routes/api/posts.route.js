const express = require("express");
const router = express.Router();

const postsController = require("@/controllers/api/post.controller");
const attachResourceLoaders = require("@/utils/attachResourceLoaders");

attachResourceLoaders(router, ["post"]);
// Posts
router.get("/", postsController.getList);
router.get("/:post", postsController.getOne);
router.post("/", postsController.create);
router.put("/:post", postsController.update);
router.patch("/:post", postsController.update);
router.delete("/:post", postsController.remove);

// Posts comments
// router.get("/:post/comments", postsController.getPostComments);
// router.post("/:post/comments", postsController.createPostComments);

module.exports = router;
