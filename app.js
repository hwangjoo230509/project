const express = require('express');
const app = express();
const port = 3000;



const connect = require("./schemas");
connect();
app.listen(port, () => {
  console.log(port, '서버열림');
});
const commentsRouter = require("./routes/comments");
const postsRouter = require("./routes/posts");

app.use("/api", [commentsRouter, postsRouter]);