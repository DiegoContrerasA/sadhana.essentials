'use client'

import { getUsers } from '@/services/users'
import { useEffect, useState } from 'react'
import Button from '../Button'

const AdminList = () => {
  const [response, setResponse] = useState({ loading: false, users: [] })

  useEffect(() => {
    setResponse({ users: [], loading: true })
    getUsers()
      .then((users) => setResponse({ users, loading: false }))
      .catch(() => setResponse({ users: [], loading: false }))
  }, [])

  const { users, loading } = response

  if (loading) return <h1>Cargando ...</h1>

  return (
    <div className='font-sans max-w-2xl mx-auto'>
      {users.map((user) =>
        <div key={user.id} className='flex mb-4 shadow-lg p-3 rounded-md'>
          <div className='flex-1'>
            <p>{user.name}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
          </div>
          <div>
            {user?.welcomeEmail
              ? 'enviado'
              : <Button>
                Enviar
                </Button>}
            {user?.remainderEmail
              ? 'enviado'
              : <Button>
                Enviar
                </Button>}
            {user?.onlineEmail
              ? 'enviado'
              : <Button>
                Enviar
                </Button>}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminList
