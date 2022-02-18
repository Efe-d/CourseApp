const coursestudentController = require('../controllers/coursestudentController');

const router = require("express").Router();

router.post("/Add", coursestudentController.addCoursestudent);
router.get("/getAll", coursestudentController.getAllCoursestudent);
router.delete("/Delete/:id", coursestudentController.deleteCoursestudent);
router.put("/Update/:id", coursestudentController.updateCoursestudent);


module.exports = router;