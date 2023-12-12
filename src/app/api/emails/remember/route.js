import { ERRORS } from '@/config/errors'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { sendEmailService } from '@/libs/sendEmailService'
import { RememberTemplate } from '@/templates/remember'
import { NextResponse } from 'next/server'

export const POST = async () => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const users = await prisma.user.findMany({
      where: { remainderEmail: false },
      select: { email: true, name: true }
    })

    const requests = users.map(({ email, name }) => sendEmailService({
      to: email,
      subject: '¡Mañana es el gran día! Conéctate a mi MasterClass gratuita!',
      html: RememberTemplate({ name })
    }))

    const emails = await Promise.all(requests)

    const updateEmails = emails.filter(Boolean)

    if (updateEmails.length) {
      await prisma.user.updateMany({
        where: { email: { in: updateEmails } },
        data: { remainderEmail: true }
      })
    }

    return NextResponse.json(users)
  } catch (e) {
    console.error('SEND_SINGLE_REMAINDER_EMAIL: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
