import Snippet from '../models/Snippet.mjs'
import User from '../models/User.mjs'

const parseTags = (value) => {
  if (typeof value !== 'string') return []

  return [...new Set(
    value.split(',')
      .map(tag => tag.trim().toLowerCase())
      .filter(tag => tag.length > 0)
  )]
}

export const listSnippets = async (req, res, next) => {
  try {
    const tag = typeof req.query.tag === 'string'
      ? req.query.tag.trim().toLowerCase()
      : ''

    const author = typeof req.query.author === 'string'
      ? req.query.author.trim()
      : ''

    const filter = {}

    if (tag) {
      filter.tags = tag
    }

    if (author) {
      const user = await User.findOne({ username: author })

      if (!user) {
        return res.render('index', {
          snippets: [],
          filters: { tag, author }
        })
      }

      filter.user = user._id
    }

    const snippets = await Snippet.find(filter).populate('user').sort({ createdAt: -1 })
    res.render('index', { snippets, filters: { tag, author } })
  } catch (err) {
    next(err)
  }
}

export const showCreateForm = (req, res) => res.render('create')

export const createSnippet = async (req, res, next) => {
  try {
    const { title, code } = req.body

    if (typeof title !== 'string' || typeof code !== 'string' || title.trim().length === 0 || code.trim().length === 0) {
      req.flash('error', 'Enter a title and code')
      return res.redirect('/snippets/create')
    }

    const snippet = new Snippet({
      title,
      code,
      tags: parseTags(req.body.tags),
      user: req.session.userId
    })
    await snippet.save()
    req.flash('success', 'Snippet created successfully')
    res.redirect('/snippets')
  } catch (err) {
    req.flash('error', 'Error creating snippet')
    res.redirect('/snippets/create')
  }
}

export const showEditForm = async (req, res, next) => {
  try {
    const snippet = await Snippet.findById(req.params.id)
    res.render('edit', { snippet })
  } catch (err) {
    next(err)
  }
}

export const updateSnippet = async (req, res, next) => {
  try {
    const { title, code } = req.body

    if (typeof title !== 'string' || typeof code !== 'string' || title.trim().length === 0 || code.trim().length === 0) {
      req.flash('error', 'Enter a title and code')
      return res.redirect(`/snippets/${req.params.id}/edit`)
    }

    await Snippet.findByIdAndUpdate(req.params.id, { title, code, tags: parseTags(req.body.tags) }, { runValidators: true })
    req.flash('success', 'Snippet updated successfully')
    res.redirect('/snippets')
  } catch (err) {
    req.flash('error', 'Error updating snippet')
    res.redirect(`/snippets/${req.params.id}/edit`)
  }
}

export const deleteSnippet = async (req, res, next) => {
  try {
    await Snippet.findByIdAndDelete(req.params.id)
    req.flash('success', 'Snippet deleted successfully')
    res.redirect('/snippets')
  } catch (err) {
    req.flash('error', 'Error deleting snippet')
    res.redirect('/snippets')
  }
}
