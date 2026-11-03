export const controller = {}

/**
 * Show all items.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.list = (req, res) => {
  console.log(' [R] Read from the database.')
  console.log(' [R] Present a table with all items.\n')
  const data = {}
  res.render('read', data)
}

/**
 * Show one item.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.show = (req, res) => {
  const itemId = req.params.itemId ?? 'itemId'

  console.log(' [R] Read from the database.')
  console.log(` [R] Present data one one item with id ${itemId}.\n`)
  const data = {
    itemId
  }
  res.render('read_one', data)
}

/**
 * Show a create form.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.createForm = (req, res) => {
  console.log(' [C] Present a form, prepare to add new data.\n')
  res.render('createForm', [])
}

/**
 * Manage the posted create form.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.createSave = (req, res) => {
  const formData = req.body

  console.log(' [C] Save new item to database.')
  console.log(' ', formData)
  console.log(' [C] Redirect to a result page.')
  res.redirect('/crud')
}

/**
 * Show an update form.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.updateForm = (req, res) => {
  const itemId = req.params.itemId ?? 'itemId'

  console.log(' [U] Present a form, prepare to update data.')
  console.log(' [U] Read item from database to fill in the form.')
  console.log(' [U] (The item id can be sent as a argument to the controller)\n')
  res.render('updateForm', {
    itemId,
    value1: 'existing value 1',
    value2: 'existing value 2'
  })
}

/**
 * Mange the posted update form.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.updateSave = (req, res) => {
  const formData = req.body
  const itemId = formData.itemId

  console.log(' [U] Write item to database.')
  console.log(' ', formData)
  console.log(' [U] Redirect to a result page.')
  res.redirect('/crud/update/' + itemId)
}

/**
 * Show a delete form where the user can select what to item to delete.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.deleteFormSelect = (req, res) => {
  console.log(' [D] Present a form with all items, prepare to delete data.\n')
  res.render('deleteFormSelect')
}

/**
 * Show a delete form with a particular id to delete.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.deleteForm = (req, res) => {
  const itemId = req.params.itemId ?? 'itemId'

  console.log(' [D] Present a form, prepare to delete data.\n')
  res.render('deleteForm', {
    itemId
  })
}

/**
 * Manage the posted delete form.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.deleteSave = (req, res) => {
  const formData = req.body

  console.log(' [D] Delete item from database.')
  console.log(' [D] ItemId = ' + formData.itemId)
  console.log(' ', formData)
  console.log(' [D] Redirect to a result page.')
  res.redirect('/crud')
}
