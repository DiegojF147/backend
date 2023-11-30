const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  description: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
