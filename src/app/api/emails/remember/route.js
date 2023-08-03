import { ERRORS } from '@/config/errors'
import { getEmails, getPersonalizations } from '@/config/getEmails'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { sendSengridEmail } from '@/libs/sendSengridEmail'
import { RememberTemplate } from '@/templates/remember'
import { NextResponse } from 'next/server'

export const POST = async () => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const users = await prisma.user.findMany({
      take: 50,
      where: { remainderEmail: false },
      select: { email: true }
    })

    const send = await sendSengridEmail({
      personalizations: users.map(getPersonalizations),
      subject: 'Gracias por inscribirte',
      text: 'Bienvenido',
      html: RememberTemplate({ name: 'TEST' })
    })

    if (send) {
      await prisma.user.updateMany({
        where: { email: { in: users.map(getEmails) } },
        data: { remainderEmail: true }
      })
    }

    return NextResponse.json(users)
  } catch (e) {
    console.error('SEND_SINGLE_REMAINDER_EMAIL: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
