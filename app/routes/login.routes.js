module.exports = app => {
  const login = require("../controllers/login.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/login", login.findOne);
 

  app.use('/api/login', router);
};
