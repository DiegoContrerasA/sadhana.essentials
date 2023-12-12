import { ERRORS } from '@/config/errors'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { sendEmailService } from '@/libs/sendEmailService'
import { previousTemplate } from '@/templates/previousEmail'
import { NextResponse } from 'next/server'

export const POST = async (_, { params }) => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const user = await prisma.user.findUnique({ where: { id: params?.id } })

    if (!user) return NextResponse.json({ message: 'User not found', error: true, code: ERRORS.NOT_FOUND }, { status: 404 })

    const send = await sendEmailService({
      to: user?.email,
      subject: 'Pronto empezamos nuestra Masterclass ¡Te espero!',
      html: previousTemplate({ name: user?.name })
    })
    if (send) {
      await prisma.user.update({
        where: { id: params?.id },
        data: { previousTimeEmail: true }
      })
    }

    return NextResponse.json(user)
  } catch (e) {
    console.error('SEND_REMAINDER_EMAIL: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
