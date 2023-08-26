import { VIDEO_ERRORS } from '@/config/errors'
import { jwtVwrify } from '@/config/tokens'
import prisma from '@/libs/prismadb'

export const verifyToken = async (token) => {
  if (!token) throw new Error(VIDEO_ERRORS.MISSING_TOKEN)

  const { email } = jwtVwrify(token) ?? {}

  if (!email) throw new Error(VIDEO_ERRORS.INVALID_TOKEN)

  try {
    const user = await prisma.Interaction.upsert({
      where: { email },
      update: { },
      create: { email }
    })

    return user
  } catch (e) {
    throw new Error(e)
  }
}
