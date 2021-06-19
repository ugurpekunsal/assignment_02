/*Assignment_01 - Ugur Pekunsal - 301158229 - 6/4/2021*/

import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose, { mongo } from "mongoose";

// modules for authentication
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";

// modules for cors
import cors from "cors";

// authentication objects
let localStrategy = passportLocal.Strategy; // alias
import User from "../models/user";

// module for auth messaging and error management
import flash from "connect-flash";

// attach router
import indexRouter from "../routes/index";
import contactRouter from "../routes/contact";

// App Configuration
const app = express();
export default app; // exports app as the default Object for this module

// DB Configuration
import * as DBConfig from "./db";
mongoose.connect(DBConfig.RemoteURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

//view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

// add support for cors
app.use(cors());

// setup express session
app.use(
  session({
    secret: DBConfig.Secret,
    saveUninitialized: false,
    resave: false,
  })
);

// initialize flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// implement an Auth Strategy
passport.use(User.createStrategy());

// serialize and deserialize user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routing happens now
app.use("/", indexRouter);
app.use("/contact-list", contactRouter); // defines a new area of our website called contact-list

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
