import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_SECRET_KEY
  }
})

export const sendEmailService = async ({ to, subject, html }) => {
  try {
    const { accepted } = await transporter.sendMail({
      from: process.env.MAILER_FROM,
      to,
      subject,
      html
    })
    const [email] = accepted
    return email
  } catch (e) {
    console.error('SENGRID_EMAIL: ', { e })
    return null
  }
}
