const express = require('express');
const studentsController = require('../controllers/students-controller');
const router = express.Router();

const Student = require("../model/Student");

router.get("/", studentsController.getAllStudents);
router.post("/", studentsController.addStudent);
router.get("/:id", studentsController.getById);
router.put("/:id", studentsController.updateStudent);
router.delete("/:id", studentsController.deleteStudent);

module.exports = router;