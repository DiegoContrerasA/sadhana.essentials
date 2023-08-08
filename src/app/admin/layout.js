import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import Nav from '@/components/Nav'

const AdminLayout = async ({ children }) => {
  const session = await getServerSession(nextAuthOptions)

  if (!session) redirect('/auth')
  return (
    <div>
      <Nav />
      <h1 className='text-center mb-5 text-4xl font-bold'>Usuarios registrados</h1>
      {children}
    </div>

  )
}

export default AdminLayout
