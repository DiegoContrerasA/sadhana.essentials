import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'

export const getCurrentSession = async () => getServerSession(nextAuthOptions)
