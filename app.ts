import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

var indexRouter = require("./routes/index");

var app = express();
export default app;
