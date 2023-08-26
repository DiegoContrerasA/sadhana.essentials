import jwt from 'jsonwebtoken'

export const jwtSing = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '20h' })
}

export const jwtVwrify = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (e) {
    console.error('JWT_VERIFY: ', { token, e })
    return null
  }
}
