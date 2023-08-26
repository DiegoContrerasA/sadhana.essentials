import { VIDEO_ERRORS } from '@/config/errors'
import { jwtVwrify } from '@/config/tokens'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export const POST = async (request) => {
  try {
    const session = await getCurrentSession()

    const body = await request.json()
    const { token } = body

    const { email } = jwtVwrify(token) ?? {}

    if (!email || !session) return NextResponse.json({ error: true, message: VIDEO_ERRORS.MISSING_TOKEN }, { status: 500 })

    const user = await prisma.Interaction.upsert({
      where: { email },
      update: { },
      create: { email }
    })

    return NextResponse.json(user)
  } catch (e) {
    console.error('VALIDATE_TOKEN: ', { e })
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true }, { status: 500 })
  }
}
