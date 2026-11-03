export const controller = {}

/**
 * Check if user is admin.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.isAdmin = (req, res, next) => {
  if (res.data.user.role === 'admin') {
    next()
  } else {
    res.send(403)
  }
}

/**
 * Admin home page where to start.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.home = (req, res) => {
  res.render('admin/home', res.data)
}
