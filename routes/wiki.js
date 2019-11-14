const express = require("express");

const router = express.Router();
const addPage = require("../views/addPage");
router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.get("/add", (req, res, next) => {
  // const title = req.body.name;

  res.send(addPage());
});

router.post("/add", (req, res, next) => {
  const title = req.body;

  res.send(title);
});

router.post("/:id", (req, res, next) => {
  res.send("got to POST /wiki/");
});

module.exports = router;
