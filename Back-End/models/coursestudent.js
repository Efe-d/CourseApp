"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class coursestudent extends Model {
    static associate(models) {
      coursestudent.belongsTo(models.Course, {
        foreignKey: "courseId",
        as: "course",
      });
      coursestudent.belongsTo(models.Student, {
        foreignKey: "studentId",
        as: "student",
      });
    //Bu kısımda bir hata var.
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
