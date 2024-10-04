const userModal = require("../../../../models/userModal");

const getAllUsers = async (page, limit) => {
  try {
    const users = await userModal
      .find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    return users;
  } catch (error) {
    console.log("error", error);
  }
};

const getUserById = async (id) => {
  try {
    const user = await userModal.findById(id);
    return user;
  } catch (error) {
    console.log("error", error);
  }
};

const createUser = async (data) => {
  try {
    console.log("check", data);
    const user = await userModal.create({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    // await user.save();
    return user;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
