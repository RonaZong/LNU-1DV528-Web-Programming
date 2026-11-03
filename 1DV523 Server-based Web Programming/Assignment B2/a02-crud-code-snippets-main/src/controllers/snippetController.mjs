import Snippet from '../models/snippet.mjs';
import User from '../models/User.mjs';

export const listSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find().populate('user');
    res.render('snippets/index', { snippets });
  } catch (err) {
    next(err);
  }
};

export const showCreateForm = (req, res) => res.render('snippets/create');

export const createSnippet = async (req, res) => {
  try {
    const { title, code } = req.body;
    const snippet = new Snippet({
      title,
      code,
      user: req.session.userId
    });
    await snippet.save();
    req.flash('success', 'Snippet created successfully');
    res.redirect('/snippets');
  } catch (err) {
    req.flash('error', 'Error creating snippet');
    res.redirect('/snippets/create');
  }
};

export const showEditForm = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    res.render('snippets/edit', { snippet });
  } catch (err) {
    next(err);
  }
};

export const updateSnippet = async (req, res) => {
  try {
    const { title, code } = req.body;
    await Snippet.findByIdAndUpdate(req.params.id, { title, code });
    req.flash('success', 'Snippet updated successfully');
    res.redirect('/snippets');
  } catch (err) {
    req.flash('error', 'Error updating snippet');
    res.redirect(`/snippets/${req.params.id}/edit`);
  }
};

export const deleteSnippet = async (req, res) => {
  try {
    await Snippet.findByIdAndDelete(req.params.id);
    req.flash('success', 'Snippet deleted successfully');
    res.redirect('/snippets');
  } catch (err) {
    req.flash('error', 'Error deleting snippet');
    res.redirect('/snippets');
  }
};