const studentsController= require ('../controllers/studentsController.js')


const routerS = require('express').Router()

//Students Routes

routerS.post('/addStudents',studentsController.addStudents)
routerS.get('/getAllStudents',studentsController.getAllStudents)
routerS.delete('/deleteStudent/:id',studentsController.deleteStudent)
routerS.put('/updateStudent/:id',studentsController.updateStudent)

module.exports = routerS