const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  imageURL: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
