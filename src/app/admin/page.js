import prisma from '@/libs/prismadb'
import RememberEmails from '@/components/RememberEmails'
import TableUsers from '@/components/TableUsers'

const getUsers = () => prisma.user.findMany()

export const dynamic = 'force-dynamic'

const Admin = async () => {
  const users = await getUsers()

  return (
    <div className='relative overflow-x-auto font-sans max-w-3xl m-auto'>
      <RememberEmails />
      <TableUsers users={users} />
    </div>

  )
}

export default Admin
