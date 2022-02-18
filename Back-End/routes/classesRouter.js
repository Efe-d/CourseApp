const classesController = require("../controllers/classesController.js");

const routerC = require('express').Router()

//Classes Routes
routerC.post('/Add',classesController.addClasses);
routerC.get('/getAll',classesController.getAllClasses);
routerC.delete('/Delete/:id',classesController.deleteClass);
routerC.put('/Update/:id',classesController.updateClass);
routerC.delete('/deleteAll',classesController.deleteAllClasses);



module.exports = routerC