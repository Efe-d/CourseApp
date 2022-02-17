"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.hasOne(models.CourseStudent, {
        foreignKey: "courseId",
        as: "coursestudent",
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
