var express = require("express");
var router = express.Router();
const usersRoutes = require("./users/usersRoute");

router.use("/users", usersRoutes);

module.exports = router;
//========================== Export Module End ============================
