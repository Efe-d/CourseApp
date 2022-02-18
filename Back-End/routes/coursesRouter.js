const coursesController = require('../controllers/coursesController');

const courserouter = require('express').Router();

//Courses Routes
courserouter.post('/Add', coursesController.addCourses);
courserouter.get('/getAll', coursesController.getAllCourses);
courserouter.delete('/Delete/:id', coursesController.deleteCourse);
courserouter.put('/Update/:id', coursesController.updateCourse);
courserouter.delete('/deleteAll', coursesController.deleteAllCourses);

module.exports = courserouter;