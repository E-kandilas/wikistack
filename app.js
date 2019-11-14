const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const { db, User, Page } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");
app.use("/wiki", wikiRouter);
app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", async (rec, res, next) => {
  // const users = await User.findAll();
  res.send("l");
});

const connect = async () => {
  await User.sync({ force: true });

  await Page.sync({ force: true });

  app.listen(port, () => console.log(`listening on port ${port})`));

  db.authenticate().then(() => {
    console.log("connected to the database");
  });
};

connect();
