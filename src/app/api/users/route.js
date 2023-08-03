import { ERRORS } from '@/config/errors'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { sendSengridEmail } from '@/libs/sendSengridEmail'
import { WelcomeTemplate } from '@/templates/welcome'
import { NextResponse } from 'next/server'

export const POST = async (request) => {
  try {
    const body = await request.json()
    const { name, email, phone } = body

    if (!name || !email || !phone) return NextResponse.json({ message: 'bad request all fields are required', error: true, code: ERRORS.BAD_REQUEST }, { status: 400 })

    const user = await prisma.user.create({ data: { name, email, phone } })

    const send = await sendSengridEmail({
      to: user?.email,
      subject: 'Gracias por inscribirte',
      text: 'Bienvenido',
      html: WelcomeTemplate({ name: user?.name })
    })

    if (send) {
      await prisma.user.update({
        where: { id: user?.id },
        data: { welcomeEmail: true }
      })
    }

    return NextResponse.json(user)
  } catch (e) {
    console.error('CREATE_USER: ', { e })
    const uniqueEmail = e?.meta?.target === 'User_email_key'
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: uniqueEmail ? ERRORS.EMAIL_REGISTER : ERRORS.SERVER_ERROR }, { status: 500 })
  }
}

export const GET = async () => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const users = await prisma.user.findMany()

    return NextResponse.json(users)
  } catch (e) {
    console.error('GET_ALL_USER: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
