const db = require("../models");

const Students = db.students;

const addStudents = async (req, res) => {
  let info = {
    name: req.body.name,
    classId: req.body.classid,
    age: req.body.age,
  };

  const students = await db.Student.create(info);
  res.status(200).send(students);
  console.log(students);
};

const getAllStudents = async (req, res) => {
  let students = await db.Student.findAll({
    include: ["courses", "class"],
  });
  res.status(200).send(students);
};

const updateStudent = async (req, res) => {
  let id = req.params.id;

  const students = await db.Student.update(req.body, { where: { id: id } });
  res.status(200).send(students);
};

const deleteStudent = async (req, res) => {
  let id = req.params.id;

  await db.coursestudent.destroy({
    where: {
      studentId: id,
    },
  });

  await db.Student.destroy({ where: { id: id } });
  res.status(200).send("Student deleted");
};

const deleteAllStudent = async (req, res) => {
  await db.coursestudent.destroy({ where: {} });

  await db.Student.destroy({ where: {} });
  res.status(200).send("All students deleted");
};

module.exports = {
  addStudents,
  getAllStudents,
  deleteStudent,
  updateStudent,
  deleteAllStudent
};
