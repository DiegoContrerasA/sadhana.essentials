export const getEmails = ({ email }) => email

export const getPersonalizations = ({ email }) => ({ to: [{ email }] })
