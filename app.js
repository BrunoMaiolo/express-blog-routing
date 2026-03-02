const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Home!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});