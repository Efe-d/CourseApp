const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.classes = require("./classesModel.js")(sequelize, DataTypes);
db.students = require("./studentModel.js")(sequelize, DataTypes);
db.courses = require("./coursesModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done!");
});
//1 to many relationship
db.classes.hasMany(db.students, {
  foreignKey: "id",
  as: "students",
});
db.students.belongsTo(db.classes, {
  foreignKey: "classid",
  as: "classes",
});
//Bire çok ilişki sanırım çalışıyor ama düzeltilmesi gerekiyor istediğim gibi değil !! 
module.exports = db;
