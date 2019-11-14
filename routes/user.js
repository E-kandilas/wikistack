const express = require("express");
const router = express.Router();
const viewAll = require("../views/userList");
const { db, User, Page } = require("../models");

router.get("/", async (req, res, next) => {
  await res.send(User.findAll());
});

router.post("/:id", (req, res, next) => {
  res.send();
});

router.get("/add", (req, res, next) => {
  res.send();
});

module.exports = router;
