const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas para usuarios
router.post("/create", userController.createUser);
router.get("/:userId", userController.getUserById);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
