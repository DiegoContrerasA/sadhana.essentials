import LoginForm from '@/components/LoginForm'
import { getServerSession } from 'next-auth/next'
import { nextAuthOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
const Login = async () => {
  const session = await getServerSession(nextAuthOptions)

  console.info({ session })

  if (session) redirect('/admin')

  return (
    <div className='flex items-center justify-center w-full h-screen px-10'>
      <LoginForm />
    </div>
  )
}

export default Login
