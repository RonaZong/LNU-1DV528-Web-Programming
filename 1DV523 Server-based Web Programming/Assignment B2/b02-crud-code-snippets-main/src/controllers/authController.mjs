import User from '../models/User.mjs'

export const showLogin = (req, res) => res.render('login')
export const showRegister = (req, res) => res.render('register')

export const register = async (req, res) => {
  try {
    const { username, password } = req.body

    if (typeof username !== 'string' || typeof password !== 'string' || username.trim().length === 0 || password.trim().length === 0) {
      req.flash('error', 'Enter a username and password')
      return res.redirect('/auth/register')
    }

    const existingUser = await User.findOne({ username })

    if (existingUser) {
      req.flash('error', 'Username already exists')
      return res.redirect('/auth/register')
    }

    const user = new User({ username, password })
    await user.save()
    req.flash('success', 'Registration successful! Please login.')
    res.redirect('/auth/login')
  } catch (err) {
    req.flash('error', 'Error during registration')
    res.redirect('/auth/register')
  }
}

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body

    if (typeof username !== 'string' || typeof password !== 'string' || username.trim().length === 0 || password.trim().length === 0) {
      req.flash('error', 'Invalid username or password')
      return res.redirect('/auth/login')
    }

    const user = await User.findOne({ username })

    if (!user || !(await user.comparePassword(password))) {
      req.flash('error', 'Invalid username or password')
      return res.redirect('/auth/login')
    }

    req.session.regenerate((err) => {
      if (err) return next(err)

      req.session.userId = String(user._id)
      req.flash('success', `Welcome back, ${username}!`)

      req.session.save((err) => {
        if (err) return next(err)
        res.redirect('/snippets')
      })
    })
  } catch (err) {
    req.flash('error', 'Error during login')
    res.redirect('/auth/login')
  }
}

export const logout = (req, res) => {
  req.session.destroy(() => res.redirect('/'))
}
