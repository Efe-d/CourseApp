const db = require("../models");

const Students = db.students;

const addStudents = async (req, res) => {
  let info = {
    name: req.body.name,
    classid: req.body.classid,
    age: req.body.age,
    coursesid: req.body.courseid,
  };

  const students = await Students.create(info);
  res.status(200).send(students);
  console.log(students);
};

const getAllStudents = async (req, res) => {
  let students = await Students.findAll({});
  res.status(200).send(students);
};

const updateStudent = async (req, res) => {
  let id = req.params.id;

  const students = await Students.update(req.body, { where: { id: id } });
  res.status(200).send(students);
};

const deleteStudent = async (req, res) => {
  let id = req.params.id;

  await Students.destroy({ where: { id: id } });
  res.status(200).send("Student deleted");
};


module.exports = {
  addStudents,
  getAllStudents,
  deleteStudent,
  updateStudent,
};
