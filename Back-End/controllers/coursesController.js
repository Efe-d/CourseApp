const db = require("../models");

const Courses = db.courses;

const addCourses = async (req, res) => {
  let info = {
    courseName: req.body.coursename,
    studentId: req.body.studentid,
  };

  const courses = await db.Course.create(info);
  res.status(200).send(courses);
  console.log(courses);
};

const getAllCourses = async (req, res) => {
  let courses = await db.Course.findAll({
    include: [
      {
        model: db.Student,
        as: "student",
      },
    ],
  });
  res.status(200).send(courses);
};

const updateCourse = async (req, res) => {
  let id = req.params.id;

  const courses = await db.Course.update(req.body, { where: { id: id } });
  res.status(200).send(courses);
};

const deleteCourse = async (req, res) => {
  let id = req.params.id;
  await db.Course.destroy({ where: { id: id } });
  res.status(200).send("Course deleted");
};

module.exports = {
  addCourses,
  getAllCourses,
  deleteCourse,
  updateCourse,
};
