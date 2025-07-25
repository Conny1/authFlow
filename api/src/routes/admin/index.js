const express = require("express");
const userRoute = require("./user.route");

const router = express.Router();

let routes = [
  {
    path: "/user",
    route: userRoute,
  },
];

routes.forEach((item) => {
  router.use(item.path, item.route);
});

module.exports = router;
