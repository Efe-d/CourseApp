const db = require("../models");

const addClasses = async (req, res) => {
  let info = {
    name: req.body.name,
  };

  const classes = await db.Class.create(info);
  res.status(200).send(classes);
  console.log(classes);
};

const getAllClasses = async (req, res) => {
  let classes = await db.Class.findAll({
    include: [
      {
        model: db.Student,
        as: "students",
      },
    ],
  });
  res.status(200).send(classes);
};

const updateClass = async (req, res) => {
  let id = req.params.id;

  const classes = await db.Class.update(req.body, { where: { id: id } });
  res.status(200).send(classes);
};

const deleteClass = async (req, res) => {
  let id = req.params.id;
  await db.Class.destroy({ where: { id: id } });
  res.status(200).send("Class deleted");
};

const deleteAllClasses = async (req, res) => {
  await db.Class.destroy({ where: {} });
  res.status(200).send("All classes deleted");
};
module.exports = {
  addClasses,
  getAllClasses,
  deleteClass,
  updateClass,
  deleteAllClasses
};
