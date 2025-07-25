const express = require("express");
const { validate } = require("../../middlewares/validation");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const { verifyTokens } = require("../../middlewares/verifyTokens");

const route = express.Router();

route.post(
  "/signup",
  validate(userValidation.createUser),
  userController.createUser
);

route.post("/login", validate(userValidation.login), userController.login);
// require authorisation to access
route.use(verifyTokens);

route.get("/auth-user", userController.getauthUser);

route.put(
  "/:id",
  validate(userValidation.updateUser),
  userController.updateUser
);

module.exports = route;
