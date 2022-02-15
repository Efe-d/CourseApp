const classesController = require('../controllers/classesController.js');

const routerC = require('express').Router()

//Classes Routes
routerC.post('/addClasses',classesController.addClasses)
routerC.get('/getAllClasses',classesController.getAllClasses)
routerC.delete('/deleteClass/:id',classesController.deleteClass)
routerC.put('/updateClass/:id',classesController.updateClass)



module.exports = routerC