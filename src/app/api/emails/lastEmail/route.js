import { ERRORS } from '@/config/errors'
import { jwtSing } from '@/config/tokens'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { sendEmailService } from '@/libs/sendEmailService'
import { LastEmailTemplate } from '@/templates/lastEmail'
import { NextResponse } from 'next/server'

export const POST = async () => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const users = await prisma.user.findMany({
      where: { onlineEmail: false },
      select: { email: true, name: true }
    })

    const updateEmails = []
    for (const user of users) {
      const { name, email } = user
      const token = jwtSing(email)
      const send = await sendEmailService({
        to: email,
        subject: 'Pronto empezamos nuestra Masterclass ¡Te espero!',
        html: LastEmailTemplate({ name, token })
      })
      if (send) updateEmails.push(send)
    }

    if (updateEmails.length) {
      await prisma.user.updateMany({
        where: { email: { in: updateEmails } },
        data: { onlineEmail: true }
      })
    }

    return NextResponse.json(updateEmails)
  } catch (e) {
    console.error('SEND_SINGLE_ONLINE_EMAIL: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
