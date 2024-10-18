const { Router } = require("express");
const router = Router();

const enrollmentController = require("../src/controllers/enrollment.controller.js");
const enrollmentMiddleware = require("../src/middlewares/enrollment.middleware.js");

router.post(
  "/enroll_student",
  enrollmentMiddleware.verifyEnrollment,
  enrollmentController.enrollStudentInCourse
);
// Add your routes here

module.exports = router;
