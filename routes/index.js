const { Router } = require("express");
const {
  getUsers,
  createUser,
  getUsersById,
  deleteUserById,
  updateUserById,
} = require("../controllers/index.controllers");
const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUser);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);

module.exports = router;
