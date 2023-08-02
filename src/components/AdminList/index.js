'use client'

import { getUsers } from '@/services/users'
import { useEffect, useState } from 'react'
import RememberEmails from '../RememberEmails'
import TableUsers from '../TableUsers'

const AdminList = () => {
  const [response, setResponse] = useState({ loading: true, users: [] })

  useEffect(() => {
    setResponse({ users: [], loading: true })
    getUsers()
      .then((users) => setResponse({ users, loading: false }))
      .catch(() => setResponse({ users: [], loading: false }))
  }, [])

  const { users, loading } = response

  if (loading) {
    return (
      <div className='max-w-2xl m-auto text-center text-xl text-gray-500 py-5'>
        <p>Listando usuarios ...</p>
      </div>
    )
  }

  if (!loading && !users.length) {
    return (
      <div className='max-w-2xl m-auto text-center text-xl text-gray-500 py-5'>
        <p>No hay usuarios registrados ...</p>
      </div>
    )
  }

  return (
    <div className='relative overflow-x-auto font-sans max-w-2xl m-auto'>
      <RememberEmails />
      <TableUsers users={users} />
    </div>
  )
}

export default AdminList
