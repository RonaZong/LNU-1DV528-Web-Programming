import { randomBytes, timingSafeEqual } from 'node:crypto'

export const csrfProtection = (req, res, next) => {
  if (!req.session.csrfToken) {
    req.session.csrfToken = randomBytes(32).toString('hex')
  }

  res.locals.csrfToken = req.session.csrfToken

  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    return next()
  }

  const token = req.body?._csrf

  if (
    typeof token !== 'string' ||
    !/^[a-f0-9]{64}$/.test(token)
  ) {
    return res.status(403).render('403')
  }

  const valid = timingSafeEqual(
    Buffer.from(token, 'hex'),
    Buffer.from(req.session.csrfToken, 'hex')
  )

  if (!valid) {
    return res.status(403).render('403')
  }

  next()
}
