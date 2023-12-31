const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Rutas para comentarios
router.post("/create", commentController.createComment);
router.get("/:commentId", commentController.getCommentById);
router.put("/:commentId", commentController.updateComment);
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
