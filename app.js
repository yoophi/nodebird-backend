const express = require("express");
const path = require("path");
const port = process.env.PORT || 3005;

const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");

const app = express();
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello, world");
});
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server started at: http://127.0.0.1:${port}`);
});
