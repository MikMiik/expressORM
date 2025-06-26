const express = require("express");
const router = express.Router();

const postsController = require("@/controllers/api/post.controller");
const attachResourceLoaders = require("@/utils/attachResourceLoaders");

attachResourceLoaders(router, ["post"]);
// Posts
router.get("/", postsController.getList);
router.put("/:post", postsController.update);
router.patch("/:post", postsController.update);
router.post("/", postsController.create);
router.delete("/:post", postsController.remove);
router.get("/:post", postsController.getOne);

module.exports = router;
