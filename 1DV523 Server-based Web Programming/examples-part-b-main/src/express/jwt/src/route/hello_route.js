import express from 'express'
import http from 'http'

export const router = express.Router()

router.get('/page', (req, res) => {
  res.send('Hello World!\n')
})

router.get('/json', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(
    {
      message: 'Hello World!\n'
    },
    null,
    3
  ))
})

router.get('/403', (req, res) => {
  const err = new Error(http.STATUS_CODES[403])
  err.status = 403
  throw err
})

router.get('/500', (req, res) => {
  const err = new Error(http.STATUS_CODES[500])
  err.status = 500
  throw err
})
