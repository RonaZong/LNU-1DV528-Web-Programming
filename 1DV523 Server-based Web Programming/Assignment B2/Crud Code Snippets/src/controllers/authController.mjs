import User from "../models/User.mjs";

export const showLogin = (req, res) => res.render("auth/login");
export const showRegister = (req, res) => res.render("auth/register");

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      req.flash("error", "Username already exists");
      return res.redirect("/auth/register");
    }

    const user = new User({ username, password });
    await user.save();
    req.flash("success", "Registration successful! Please login.");
    res.redirect("/auth/login");
  } catch (err) {
    req.flash("error", "Error during registration");
    res.redirect("/auth/register");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
      req.flash("error", "Invalid username or password");
      return res.redirect("/auth/login");
    }

    req.session.userId = user._id;
    req.flash("success", `Welcome back, ${username}!`);
    res.redirect("/snippets");
  } catch (err) {
    req.flash("error", "Error during login");
    res.redirect("/auth/login");
  }
};

export const logout = (req, res) => {
  req.session.destroy(() => res.redirect("/"));
};
