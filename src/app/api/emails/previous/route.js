import { ERRORS } from '@/config/errors'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { sendEmailService } from '@/libs/sendEmailService'
import { previousTemplate } from '@/templates/previousEmail'
import { NextResponse } from 'next/server'

export const POST = async () => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const users = await prisma.user.findMany({
      where: { previousTimeEmail: false },
      select: { email: true, name: true }
    })

    const updateEmails = []
    for (const user of users) {
      const { name, email } = user
      const send = await sendEmailService({
        to: email,
        subject: 'Pronto empezamos nuestra Masterclass ¡Te espero!',
        html: previousTemplate({ name })
      })
      if (send) updateEmails.push(send)
    }

    if (updateEmails.length) {
      await prisma.user.updateMany({
        where: { email: { in: updateEmails } },
        data: { previousTimeEmail: true }
      })
    }

    return NextResponse.json(users)
  } catch (e) {
    console.error('SEND_SINGLE_REMAINDER_EMAIL: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
