const express = require("express");
const router = express.Router();

const commentsController = require("@/controllers/api/comment.controller.js");
const attachResourceLoaders = require("@/utils/attachResourceLoaders.js");

attachResourceLoaders(router, ["comment"]);

router.get("/", commentsController.getList);
router.get("/:comment", commentsController.getOne);
router.post("/", commentsController.create);
router.put("/:comment", commentsController.update);
router.patch("/:comment", commentsController.update);
router.delete("/:comment", commentsController.remove);

module.exports = router;
