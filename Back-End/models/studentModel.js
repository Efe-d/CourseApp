module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define("students", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classid: {
      type: DataTypes.STRING,
    },
  });

  return Students;
};
