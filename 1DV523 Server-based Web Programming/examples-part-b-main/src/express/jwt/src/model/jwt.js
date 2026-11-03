import jwt from 'jsonwebtoken'

const model = {}
export default model

/**
 * Generate a JWT token.
 *
 * @param {string} username Username of the user.
 * @returns {object} Details on the user.
 */
model.getJwtToken = async (username, role, secret) => {
  const payload = {
    username: username,
    role: role 
  }
  const secretOrPrivateKey = secret
  const token = jwt.sign(payload, secretOrPrivateKey)

  return token
}

