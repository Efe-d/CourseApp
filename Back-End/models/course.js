"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsToMany(models.Student, {
        through: "coursestudent",
        foreignKey: "courseId",
        as: "students",
      });
    }
  }
  Course.init(
    {
      courseName: DataTypes.STRING,
      studentId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
