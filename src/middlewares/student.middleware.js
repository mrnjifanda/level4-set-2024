const verifyStudent = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "All fields are required: name, email, enrollmentDate" });
  }

  next();
};
module.exports = {
  verifyStudent,
};
