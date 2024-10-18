const { Router } = require("express");
const router = Router();

const studentController = require("../src/controllers/student.controller.js");
const studentMiddleware = require("../src/middlewares/student.middleware.js");

router.post(
  "/add_student",
  studentMiddleware.verifyStudent,
  studentController.addStudent
);
router.get("/", studentController.getStudents);
// Add your routes here

module.exports = router;
