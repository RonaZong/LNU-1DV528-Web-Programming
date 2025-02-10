import { apikey } from '../model/apikey.js'

export const controller = {}

/**
 * List all the API keys.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.list = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(apikey.get(), null, 2))
}

/**
 * Verify that the API key exists in the query string.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.verifyQueryString = (req, res) => {
  const aKey = req.query.API_KEY || null

  if (!apikey.verifyKey(aKey)) {
    return res.status(403).json({
      type: 'forbidden',
      message: 'You have not supplied a valid API key!'
    })
  } else if (!apikey.verifyRate(aKey)) {
    return res.status(403).json({
      type: 'forbidden',
      message: 'You have reached your usage rate!'
    })
  }

  res.json({
    message: 'YES. You supplied a valid key through the query string!'
  })
}

/**
 * Verify that the API key exists in the header.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.verifyHeader = (req, res) => {
  const aKey = req.header('Authorization') || null

  if (!apikey.verifyKey(aKey)) {
    return res.status(403).json({
      type: 'forbidden',
      message: 'You have not supplied a valid API key!'
    })
  } else if (!apikey.verifyRate(aKey)) {
    return res.status(403).json({
      type: 'forbidden',
      message: 'You have reached your usage rate!'
    })
  }

  res.json({
    message: 'YES. You supplied a valid key through the header!'
  })
}

/**
 * Verify that the API key exists in the body.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.verifyBody = (req, res) => {
  const aKey = req.body.authorization || null

  if (!apikey.verifyKey(aKey)) {
    return res.status(403).json({
      type: 'forbidden',
      message: 'You have not supplied a valid API key!'
    })
  } else if (!apikey.verifyRate(aKey)) {
    return res.status(403).json({
      type: 'forbidden',
      message: 'You have reached your usage rate!'
    })
  }

  res.json({
    message: 'YES. You supplied a valid key through the body!'
  })
}
