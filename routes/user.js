const express = require("express");
const router = express.Router();
const viewAll = require("../views/userList");
const { db, User, Page } = require("../models");

router.get("/", async (req, res, next) => {
  await res.send(User.findAll());
});

router.get("/:id", async (req, res, next) => {
  await res.send("get with id");
});

router.post("/", (req, res, next) => {
  res.send("IN");
});

router.put("/:id", async (req, res, next) => {
  await res.send("put users page");
});

router.delete("/:id", (req, res, next) => {
  res.send("delete page in");
});

module.exports = router;
