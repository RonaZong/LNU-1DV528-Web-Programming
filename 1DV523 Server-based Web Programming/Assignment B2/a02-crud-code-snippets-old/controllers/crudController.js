const controller = {}
module.exports = controller

// Do not forget to separate controller code from the model (classes).
// Thin controllers - thick models

/**
 * @param req
 * @param res
 */
controller.list = (req, res) => {
  console.log('[R] Read from the database.')
  console.log('[R] Present a table with all items.\n')
  res.render('read', [])
}

/**
 * @param req
 * @param res
 */
controller.createForm = (req, res) => {
  console.log('[C] Present a form, prepare to add new data.\n')
  res.render('createForm', [])
}

/**
 * @param req
 * @param res
 */
controller.createSave = (req, res) => {
  const formData = req.body

  console.log('[C] Save new item to database.')
  console.log(formData)
  console.log('[C] Redirect to a result page.')
  res.redirect('/crud')
  // res.send(formData)
}

/**
 * @param req
 * @param res
 */
controller.updateForm = (req, res) => {
  const itemId = req.params.itemId || 'unknown itemId'

  console.log('[U] Present a form, prepare to update data.')
  console.log('[U] Read item from database to fill in the form.')
  console.log('[U] (The item id can be sent as a argument to the controller)\n')
  res.render('updateForm', {
    itemId: itemId,
    value1: 'existing value 1',
    value2: 'existing value 2'
  })
}

/**
 * @param req
 * @param res
 */
controller.updateSave = (req, res) => {
  const formData = req.body
  const itemId = formData.itemId || 'unknown itemId'

  console.log('[U] Write item to database.')
  console.log(formData)
  console.log('[U] Redirect to a result page.')
  res.redirect('/crud/update/' + itemId)
}

/**
 * @param req
 * @param res
 */
controller.deleteForm = (req, res) => {
  console.log('[D] Present a form, prepare to delete data.\n')
  res.render('deleteForm', [])
}

/**
 * @param req
 * @param res
 */
controller.deleteSave = (req, res) => {
  const formData = req.body

  console.log('[D] Delete item from database.')
  console.log('[D] ItemId = ' + formData.itemId)
  console.log(formData)
  console.log('[D] Redirect to a result page.')
  res.redirect('/crud')
  // res.send("Delete " + formData.itemId)
}
