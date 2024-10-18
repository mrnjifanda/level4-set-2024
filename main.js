const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test1-sep-2024")
  .then(() => {
    const PORT = 3000;
    const app = express();
    app.use(express.json());

    const courseRoute = require("./routes/course.route");
    app.use("/", courseRoute);
    const studentRoute = require("./routes/student.route");
    app.use("/students", studentRoute);
    const enrollmentRoute = require("./routes/enrollment.route");
    app.use("/enroll", enrollmentRoute);

    app.listen(3000, () =>
      console.log("Application listening on http://localhost:" + PORT)
    );
  })
  .catch((err) => {
    console.error(err);
  });
