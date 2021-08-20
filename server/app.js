require("dotenv").config();
require("./config/dbConnection");
require("./config/cloudinary.config");

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const app = express();

// middlewares
const corsOptions = { origin: process.env.FRONTEND_URL, credentials: true };

app.use(cors(corsOptions));
app.use(logger("dev")); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }), 
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    resave: true,
    saveUninitialized: true,
  })
)

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users")); //ok
app.use("/api/ilookgood", require("./routes/coolPost"))
app.use("api/plzhelp", require("./routes/helpPost"))

//404
app.use((req, res, next) => {
    const error = new Error("Resource not found.");
    error.status = 404;
    next(error);
  });

//404 handler middleware
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== "production") {
      console.error(err);
    }
    console.log("An error occured");
    res.status(err.status || 500);
    if (!res.headersSent) {
      if (process.env.NODE_ENV === "production") {
        res.json(err);
      } else {
        res.json(
          JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
        );
      }
    }
  });

module.exports = app;
