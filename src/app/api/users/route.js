import { ERRORS } from '@/config/errors'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export const POST = async (request) => {
  try {
    const body = await request.json()
    const { name, email, phone } = body

    if (!name || !email || !phone) return NextResponse.json({ message: 'bad request all fields are required', error: true, code: ERRORS.BAD_REQUEST }, { status: 400 })

    const user = await prisma.user.create({
      data: {
        name, email, phone
      }
    })

    return NextResponse.json(user)
  } catch (e) {
    const uniqueEmail = e?.meta?.target === 'User_email_key'
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: uniqueEmail ? ERRORS.EMAIL_REGISTER : ERRORS.SERVER_ERROR }, { status: 500 })
  }
}

export const GET = async () => {
  try {
    const users = await prisma.user.findMany()

    return NextResponse.json(users)
  } catch (e) {
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
