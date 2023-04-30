const express = require("express");
router = express.Router();
userRoute = require("../backend/routes controller/userController")

router.get("/", userRoute.userController);

module.exports = router;