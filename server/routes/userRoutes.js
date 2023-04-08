const { Router } = require("express");
const { home , createUser , getUser , updateUser , deleteUser} = require('../controllers/userController');
const { createTask } = require('../controllers/taskController');

const router = Router();


router.get("/",home);
router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.post("/task/createTask", createTask);

module.exports = router;