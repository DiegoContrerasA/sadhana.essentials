import { ERRORS } from '@/config/errors'
import { getCurrentSession } from '@/libs/getCurrentSession'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export const POST = async (_, { params }) => {
  try {
    const session = await getCurrentSession()

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 401 })

    const user = await prisma.user.findUnique({
      where: {
        id: params?.id
      }
    })

    return NextResponse.json(user)
  } catch (e) {
    return NextResponse.json({ message: 'Something went wrong, please try again', error: true, code: ERRORS.SERVER_ERROR }, { status: 500 })
  }
}
