import prisma from '@/libs/prismadb'
const Admin = async () => {
  const users = await await prisma.user.findMany()

  return (
    <>
      <h1>Admin</h1>
      {users.map((user) => (
        <code key={user.id}>{JSON.stringify(user, 2, null)}</code>
      ))}
    </>

  )
}

export default Admin
