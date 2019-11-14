const express = require("express");
const app = express();
const port = 3000;
const { db } = require("./models");

app.use(express.static("public"));

app.get("/", (rec, res, next) => {
  res.send("sending from /");
});

app.listen(port, () => console.log(`listening on port ${port})`));

db.authenticate().then(() => {
  console.log("connected to the database");
});
