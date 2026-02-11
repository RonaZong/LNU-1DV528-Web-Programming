import express from "express";
import logger from "morgan";
import session from "express-session";
import flash from "connect-flash";
import mongoose from "mongoose";
import dotenv from "dotenv";
import createError from "http-errors";
import { join } from "path";

import authRoutes from "./routes/authRoutes.mjs";
import snippetRoutes from "./routes/snippetRoutes.mjs";

dotenv.config();

const app = express();

// Verify environment variables
console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log("SESSION_SECRET:", process.env.SESSION_SECRET ? "Loaded successfully" : "Missing!");

// Database connection
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/code_snippets', {
      userNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
} else {
  console.error("MONGODB_URI is not defined in the environment variables.");
}

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Session configuration - fixed to use secret option properly
app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallback_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
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

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});


// Routes
app.use("/auth", authRoutes);
app.use("/snippets", snippetRoutes);

// Root route
app.get("/", (req, res) => {
  res.redirect("/snippets");
});

// Error handler
app.use((req, res) => res.status(404).render("404"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500");
});

// Get the port number from the environment or use 3000 as default
export default (port = process.env.PORT || 3000) => {
  return app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log("Press Ctrl-C to terminate...");
  });
};
