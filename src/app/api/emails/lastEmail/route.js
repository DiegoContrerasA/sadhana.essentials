import { ERRORS } from '@/config/errors'
import { jwtSing } from '@/config/tokens'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { sendSengridEmail } from '@/libs/sendSengridEmail'
import { LastEmailTemplate } from '@/templates/lastEmail'
import { NextResponse } from 'next/server'

export const POST = async () => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const users = await prisma.user.findMany({
      take: 50,
      where: { onlineEmail: false }
    })

    const emails = []

    for (const user of users) {
      const { email, name } = user
      const token = jwtSing(email)
      const send = await sendSengridEmail({
        to: email,
        subject: 'Gracias por inscribirte',
        text: 'Bienvenido',
        html: LastEmailTemplate({ name, token })
      })

      if (send) {
        emails.push(email)
      }
    }

    if (emails.length) {
      await prisma.user.updateMany({
        where: { email: { in: emails } },
        data: { onlineEmail: true }
      })
    }

    return NextResponse.json(emails)
  } catch (e) {
    console.error('SEND_SINGLE_ONLINE_EMAIL: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
