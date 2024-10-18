const verifyCourse = (req, res, next) => {
  const { name, category, duration } = req.body;

  if (!name || !category || !duration) {
    return res.status(400).json({
      error: "All fields are required: name, category, duration, classroom",
    });
  }

  next();
};

module.exports = {
  verifyCourse,
};
