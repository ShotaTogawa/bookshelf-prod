const express = require("express");
require("./src/db/mongoose");
const authRouter = require("./src/router/authh");
const userRouter = require("./src/router/user");
const bookRouter = require("./src/router/book");
const memoRouter = require("./src/router/memo");
const uploadRouter = require("./src/router/upload");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.options("*", cors());

app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", bookRouter);
app.use("/api", memoRouter);
app.use("/api", uploadRouter);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recoginize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
