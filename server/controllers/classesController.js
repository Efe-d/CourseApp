const db = require("../models");

const Classes = db.classes;

const addClasses = async (req, res) => {
  let info = {
    studentid: req.body.studentid,
    classname: req.body.classname,
  };

  const classes = await Classes.create(info);
  res.status(200).send(classes);
  console.log(classes);
};

const getAllClasses = async (req, res) => {
  let classes = await Classes.findAll({});
  res.status(200).send(classes);
};

const updateClass = async (req, res) => {
  let id = req.params.id;

  const classes = await Classes.update(req.body, { where: { id: id } });
  res.status(200).send(classes);
};

const deleteClass = async (req, res) => {
  let id = req.params.id;
  await Classes.destroy({ where: { id: id } });
  res.status(200).send("Class deleted");
};

module.exports = {
  addClasses,
  getAllClasses,
  deleteClass,
  updateClass,
};
