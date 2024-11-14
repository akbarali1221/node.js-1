const express = require("express")
const router = express.Router()
const UserController = require("../controller/userController");



/* POST */
router.post("/user/create", UserController.userCreate)

/* GET */
router.get("/user/all", UserController.userAll)
router.get("/user/list", UserController.userList)
router.get("/user/search", UserController.userSearch)
router.get("/user/:year/:address", UserController.userFilter)
router.get("/user/me", UserController.userAuth)


module.exports = router