import { jwtVwrify } from './tokens'

export const getEmails = ({ email }) => email

export const getPersonalizations = ({ name, email }) => {
  const token = jwtVwrify(email)
  return {
    to: [{ email }],
    dynamicTemplateData: {
      name,
      link: `${process.env.NEXTAUTH_URL}/video/${token}`
    }
  }
}
