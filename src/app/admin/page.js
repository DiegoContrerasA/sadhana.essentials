import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import AdminList from '@/components/AdminList'

const Admin = async () => {
  const session = await getServerSession(nextAuthOptions)

  if (!session) redirect('/auth')
  return (
    <>
      <h1>Admin</h1>
      <AdminList />
    </>

  )
}

export default Admin
