
const verifyEnrollment = (req, res, next) => {
  const { courseId, studentId } = req.body;

  if (!courseId || !studentId) {
    return res
      .status(400)
      .json({ error: "Course ID and Student ID are required" });
  }

  next();
};
module.exports = {
  verifyEnrollment,
};
