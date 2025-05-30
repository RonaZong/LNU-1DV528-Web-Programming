import express from "express";
import logger from "morgan";
import session from "express-session";
import flash from "connect-flash";
import mongoose from "mongoose";
import dotenv from "dotenv";

import createError from "http-errors";
import { join } from "path";

import authRoutes from "./routes/authRoutes.mjs";
import userRoute from "./route/userRoutes.mjs";
import snippetRoutes from "./routes/snippetRoutes.mjs";

const app = express();

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);
app.use(flash());

// View engine setup
app.set("view engine", "ejs");

// Flash messages middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/auth", authRoutes);
app.use("/snippets", snippetRoutes);

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.redirect("/snippets");
});

// Error handler
app.use((req, res) => res.status(404).render('404'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500');
});

// Get the port number from the environment or use 3000 as default
export default (port = process.env.PORT || 3000) => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log("Press Ctrl-C to terminate...");
  });
};
