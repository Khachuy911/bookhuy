const env = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const path = require("path");
const router = require("./routers/index");
const connect = require("./config/connect");
var methodOverride = require("method-override");
var cookieParser = require("cookie-parser");
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//cookie parser
app.use(cookieParser());
//override method
app.use(methodOverride("_method"));
// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/resources/views"));

//static
app.use(express.static(path.join(__dirname, "public")));

//router
router(app);

//connect from db
connect();

app.listen(process.env.PORT, () =>
  console.log(`server start with port ${port} `)
);
