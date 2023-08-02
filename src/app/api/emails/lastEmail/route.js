import { ERRORS } from '@/config/errors'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export const POST = async () => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const users = await prisma.user.findMany({
      take: 3,
      where: {
        onlineEmail: false
      },
      select: {
        email: true
      }
    })

    return NextResponse.json(users)
  } catch (e) {
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
