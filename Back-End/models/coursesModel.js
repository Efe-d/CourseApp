module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define("courses", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    coursename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Courses;
};
