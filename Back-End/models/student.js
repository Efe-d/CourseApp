"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.Class, {
        foreignKey: "classId",
        as: "class",
      });

      Student.belongsToMany(models.Course, {
        through: "coursestudent",
        foreignKey: "studentId",
        as: "courses",
      });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      classId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
