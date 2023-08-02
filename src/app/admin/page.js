import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import AdminList from '@/components/AdminList'
import Nav from '@/components/Nav'

const Admin = async () => {
  const session = await getServerSession(nextAuthOptions)

  if (!session) redirect('/auth')
  return (
    <div>
      <Nav />
      <h1 className='text-center mb-5 text-4xl font-bold'>Usuarios registrados</h1>
      <AdminList />
    </div>

  )
}

export default Admin
