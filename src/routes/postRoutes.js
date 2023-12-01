const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Rutas para posts
router.post("/create", postController.createPost);
router.get("/:postId", postController.getPostById);
router.put("/:postId", postController.updatePost);
router.delete("/:postId", postController.deletePost);

module.exports = router;
