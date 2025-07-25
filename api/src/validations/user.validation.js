const Joi = require("joi");
const { objectId } = require("../utils");

const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().alphanum().required(),
    last_name: Joi.string().alphanum().required(),

    password: Joi.string()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#^])[A-Za-z\\d@$!%*?&#^]{8,30}$"
        )
      )
      .required()
      .messages({
        "string.pattern.base":
          "Password must be 8–30 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        "string.empty": "Password is required.",
      }),
    repeat_password: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .messages({
        "any.only": "Passwords do not match.", // Custom error message for mismatch
        "string.empty": "Repeat password is required.",
      }),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  }),
};

const login = {
  body: Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
  }),
};

const updateUser = {
  body: Joi.object().keys({
    first_name: Joi.string().alphanum(),
    is_deleted: Joi.boolean(),
    last_name: Joi.string().alphanum(),
    password: Joi.string(),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    __v: Joi.number(),
    branches: Joi.array().items(
      Joi.object({
        branch_id: Joi.string().custom(objectId).required(),
        role: Joi.string()
          .valid("Super Admin", "Admin", "Branch Manager", "Staff")
          .required(),
      })
    ),
    super_admin_id: Joi.string().custom(objectId),
    _id: Joi.string().custom(objectId),
    role: Joi.string().valid("Super Admin", "Admin", "Branch Manager", "Staff"),
  }),
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createUser,
  login,
  updateUser,
  updateUser,
};
