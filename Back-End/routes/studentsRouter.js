const studentsController= require ('../controllers/studentsController.js')


const routerS = require('express').Router()

//Students Routes

routerS.post('/Add',studentsController.addStudents)
routerS.get('/getAll',studentsController.getAllStudents)
routerS.delete('/Delete/:id',studentsController.deleteStudent)
routerS.put('/Update/:id',studentsController.updateStudent)
routerS.delete('/deleteAll',studentsController.deleteAllStudent)

module.exports = routerS