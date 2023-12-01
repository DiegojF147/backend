const { Post } = require("../models/post");

// Crear un nuevo post
const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el post" });
  }
};

// Obtener información de un post por ID
const getPostById = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el post" });
  }
};

// Actualizar información de un post por ID
const updatePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el post" });
  }
};

// Eliminar un post por ID
const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el post" });
  }
};

module.exports = { createPost, getPostById, updatePost, deletePost };
