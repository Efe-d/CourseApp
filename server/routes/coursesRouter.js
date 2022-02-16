const coursesController = require('../controllers/coursesController');

const courserouter = require('express').Router();

//Courses Routes
courserouter.post('/addCourses', coursesController.addCourses);
courserouter.get('/getAllCourses', coursesController.getAllCourses);
courserouter.delete('/deleteCourse/:id', coursesController.deleteCourse);
courserouter.put('/updateCourse/:id', coursesController.updateCourse);

module.exports = courserouter;