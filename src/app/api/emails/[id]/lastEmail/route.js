import { ERRORS } from '@/config/errors'
import { jwtSing } from '@/config/tokens'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { sendSengridEmail } from '@/libs/sendSengridEmail'
import { LastEmailTemplate } from '@/templates/lastEmail'
import { NextResponse } from 'next/server'

export const POST = async (_, { params }) => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const user = await prisma.user.findUnique({ where: { id: params?.id } })

    if (!user) return NextResponse.json({ message: 'User not found', error: true, code: ERRORS.NOT_FOUND }, { status: 404 })

    const { name, email } = user

    const token = jwtSing(email)

    const send = await sendSengridEmail({
      to: email,
      subject: 'Gracias por inscribirte',
      text: 'Bienvenido',
      html: LastEmailTemplate({ name, token })
    })

    if (send) {
      await prisma.user.update({
        where: { id: params?.id },
        data: { onlineEmail: true }
      })
    }

    return NextResponse.json(user)
  } catch (e) {
    console.error('SEND_ONLINE_EMAIL: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
