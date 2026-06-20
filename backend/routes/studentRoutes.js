const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, studentController.getAllStudents);
router.post("/", authMiddleware, studentController.addStudent);
router.put("/:id", authMiddleware, studentController.updateStudent);
router.delete("/:id", authMiddleware, studentController.deleteStudent);

module.exports = router;