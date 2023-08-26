import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendSengridEmail = async ({ to, subject, text, html, personalizations, templateId }) => {
  try {
    await sgMail.send({
      to,
      from: process.env.FROM,
      subject,
      text,
      html,
      personalizations,
      templateId
    })
    return true
  } catch (e) {
    console.error('SENGRID_EMAIL: ', { e })
    return false
  }
}
