const { createError } = require("../configs/errorConfig");
const { pick } = require("../middlewares/validation");
const { userService } = require("../services");
const ObjectId = require("mongoose").Types.ObjectId;

const createUser = async (req, resp, next) => {
  try {
    const user = await userService.createUser(req.body);
    resp
      .status(200)
      .json({ status: 200, data: { message: "New account created" } });
  } catch (error) {
    return next(createError(error.status || 500, error.message));
  }
};

const login = async (req, resp, next) => {
  try {
    const user = await userService.login(req.body);
    resp.status(200).json(user);
  } catch (error) {
    return next(createError(error.status || 500, error.message));
  }
};

const updateUser = async (req, resp, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    resp.status(200).json({ status: 200, data: user });
  } catch (error) {
    return next(createError(error.status || 500, error.message));
  }
};

const getauthUser = async (req, resp, next) => {
  try {
    const user = await userService.getauthUser(req.user._id);
    console.log(user);

    resp
      .set("Cache-Control", "no-store")
      .status(200)
      .json({ status: 200, data: user });
  } catch (error) {
    return next(createError(error.status || 500, error.message));
  }
};

module.exports = {
  createUser,
  login,
  updateUser,
  getauthUser,
};
