const { Comment } = require("../models/comment");

// Crear un nuevo comentario
const createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el comentario" });
  }
};

// Obtener información de un comentario por ID
const getCommentById = async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el comentario" });
  }
};

// Actualizar información de un comentario por ID
const updateComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      req.body,
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el comentario" });
  }
};

// Eliminar un comentario por ID
const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el comentario" });
  }
};

module.exports = {
  createComment,
  getCommentById,
  updateComment,
  deleteComment,
};
