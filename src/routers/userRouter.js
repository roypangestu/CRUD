const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/userController");

router.get("/", user_controller.get_allUser);
router.post("/", user_controller.post_user);
router.patch("/:id_user", user_controller.update_user);
router.delete("/:id_user", user_controller.delete_user);

module.exports = router;
