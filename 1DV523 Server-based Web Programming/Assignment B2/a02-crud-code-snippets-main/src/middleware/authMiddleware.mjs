export const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    req.flash('error', 'You must be logged in to access this page');
    return res.status(403).render('403');
  }
  next();
};

export const checkOwnership = async (req, res, next) => {
  try {
    const snippet = await mongoose.model('Snippet').findById(req.params.id);
    if (!snippet) {
      return res.status(404).render('404');
    }
    if (snippet.user.toString() !== req.session.userId.toString()) {
      req.flash('error', 'You are not authorized to perform this action');
      return res.status(403).render('403');
    }
    next();
  } catch (err) {
    next(err);
  }
};