require('dotenv').config()
var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", require("./routes/users"));
app.use("login",require("./routes/userAuth"))
const DBConnection = require('./libs/mongo')
DBConnection()
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render error page
  res.status(err.status || 500);
  res.render("error");
});

const port = 8000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
