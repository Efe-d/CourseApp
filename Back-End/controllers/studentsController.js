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
   include: [{
      model: db.Class,
      as: "class",
    }],
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

  await db.Student.destroy({ where: { id: id } });
  res.status(200).send("Student deleted");
};


module.exports = {
  addStudents,
  getAllStudents,
  deleteStudent,
  updateStudent,
};
