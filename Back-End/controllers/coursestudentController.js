const db = require("../models");

/* const addCoursestudent = async (req, res) => {
  let info = {
    courseId: req.body.courseid,
    studentId: req.body.studentid,
  };

  const cs = await db.coursestudent.create(info);
  res.status(200).send(cs);
  console.log(cs);
}; */

const addCoursestudent = async (req, res) => {
  const { studentIds, courseId } = req.body;
  const students = await db.Student.findAll({
    where: {
      id: studentIds,
    },
  });
  const course = await db.Course.findOne({
    where: {
      id: courseId,
    },
  });

  
  const studentCourses = await db.coursestudent.bulkCreate(
    students.map((student) => {
      return {
        studentId: student.id,
        courseId: course.id,
      };
    })
  );

  res.status(200).send({message: "Coursestudent added"});
  
};
const getAllCoursestudent = async (req, res) => {
  let cs = await db.coursestudent.findAll({
    include: [
      {
        model: db.Course,
        as: "course",
      },
      {
        model: db.Student,
        as: "student",
      },
    ],
  });
  res.status(200).send(cs);
  console.log(cs);
};

const updateCoursestudent = async (req, res) => {
  let id = req.params.id;
  const cs = await db.coursestudent.update(req.body, { where: { id: id } });
  res.status(200).send(cs);
};

const deleteCoursestudent = async (req, res) => {
  let id = req.params.id;
  await db.coursestudent.destroy({ where: { id: id } });
  res.status(200).send("Coursestudent deleted");
};



module.exports = {
  addCoursestudent,
  getAllCoursestudent,
  deleteCoursestudent,
  updateCoursestudent,
};
