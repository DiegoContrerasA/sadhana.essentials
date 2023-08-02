const getUsers = () =>
  fetch(`${process.env.BACKEND_URL}/api/users`).then(response => response.json())

const Admin = async () => {
  const users = await getUsers()

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
