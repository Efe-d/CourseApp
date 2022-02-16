const {
  addClasses,
  getAllClasses,
  deleteClass,
  updateClass,
} = require("../controllers/js");

const router = require("express").Router();

//Classes Routes
router.post("/addClasses", addClasses);
router.get("/getAllClasses", getAllClasses);
router.delete("/deleteClass/:id", deleteClass);
router.put("/updateClass/:id", updateClass);

module.exports = router;
