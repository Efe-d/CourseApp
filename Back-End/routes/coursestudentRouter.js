const coursestudentController = require('../controllers/coursestudentController');

const router = require("express").Router();

router.post("/addScourses", coursestudentController.addCoursestudent);
router.get("/getAllScourses", coursestudentController.getAllCoursestudent);
router.delete("/deleteScourse/:id", coursestudentController.deleteCoursestudent);
router.put("/updateScourse/:id", coursestudentController.updateCoursestudent);
