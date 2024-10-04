var express = require("express");
const { getAllUsers, createUser, getUserById } = require("./usersDao");
const userModal = require("../../../../models/userModal");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const users = await getAllUsers(page, limit);
    if (!users || users.length < 1) {
      return res.json({
        status: 500,
        message: "No Users Record Found.",
      });
    }
    res.json({
      status: 200,
      message: "Successfully get All Users",
      data: users,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Something went wrong",
      error: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);
    if (!user) {
      return res.json({
        status: 500,
        message: "No User Found.",
      });
    }
    return res.json({
      status: 200,
      message: "Successfully User found.",
      data: user,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Something went wrong",
      error: error,
    });
  }
});

router.post("/createUser", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const data = {
      name,
      email,
      password,
    };

    if (!name || !email || !password) {
      return res.json({
        status: 500,
        message: "Some Data is Missing.",
      });
    }

    const userCheck = await userModal.findOne({ email: email });

    if (userCheck) {
      return res.json({
        status: 500,
        message: "User already Exist.",
      });
    }

    const user = await createUser(data);

    res.json({
      status: 200,
      message: "Successfully User Created.",
      data: user,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Something went wrong",
      error: error,
    });
  }
});

router.delete("/deleteAllUsers", async (req, res) => {
  try {
    await userModal.deleteMany();
    return res.json({
      status: 200,
      message: "Successfully Deleted All Users",
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Something went wrong",
      error: error,
    });
  }
});
module.exports = router;
//========================== Export Module End ============================
