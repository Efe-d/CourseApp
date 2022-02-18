"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class coursestudent extends Model {
    static associate(models) {
      coursestudent.belongsToMany(models.Course, {
        through: "coursestudent",
        foreignKey: "courseId",
        as: "course",
      });
      coursestudent.belongsToMany(models.Student, {
        through: "coursestudent",
        foreignKey: "studentId",
        as: "student",
      });
    }
  }
  coursestudent.init(
    {
      studentId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "coursestudent",
    }
  );
  return coursestudent;
};
