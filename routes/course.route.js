const { Router } = require("express");
const router = Router();

const courseController = require("../src/controllers/course.controller.js");
const courseMiddleware = require("../src/middlewares/course.middleware.js");

router.get("/courses", courseController.getCourses);
router.post(
  "/course",
  courseMiddleware.verifyCourse,
  courseController.addCourse
);
router.delete("/course/:id", courseController.deleteCourse);
router.put(
  "/course/:id",
  courseMiddleware.verifyCourse,
  courseController.updateCourse
); // Add your routes here

module.exports = router;
