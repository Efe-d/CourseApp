const db = require("../models");

const Courses = db.courses;

const addCourses = async (req, res) => {
  let info = {
    coursename: req.body.coursename,
    studentid: req.body.studentid,
  };

  const courses = await Courses.create(info);
  res.status(200).send(courses);
  console.log(courses);
};

const getAllCourses = async (req, res) => {
  let courses = await Courses.findAll({});
  res.status(200).send(courses);
};

const updateCourse = async (req, res) => {
  let id = req.params.id;

  const courses = await Courses.update(req.body, { where: { id: id } });
  res.status(200).send(courses);
};

const deleteCourse = async (req, res) => {
  let id = req.params.id;
  await Courses.destroy({ where: { id: id } });
  res.status(200).send("Course deleted");
};

module.exports = {
  addCourses,
  getAllCourses,
  deleteCourse,
  updateCourse,
};
