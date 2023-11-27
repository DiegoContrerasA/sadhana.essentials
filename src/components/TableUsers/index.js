'use client'

import useSendEmail from '@/hooks/useSendEmail'
import RowButton from './RowButton'

const TableUsers = ({ users }) => {
  const { loading, send } = useSendEmail()

  const handleSendEmail = (id, path) => async () => {
    await send(id, path)
  }

  const getLoadingButton = (id, path) => loading && loading === `${id}-${path}`

  if (!users.length) {
    return (
      <div className='max-w-2xl m-auto text-center text-xl text-gray-500 py-5'>
        <p>No hay usuarios registrados ...</p>
      </div>
    )
  }

  return (
    <div>

      <div className='flex justify-end mb-2 px-2 gap-2'>
        <p>Total users: </p>
        <strong> {users.length || 0}</strong>
      </div>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th className='px-6 py-3' width='55%'>Usuario</th>
            <th className='px-6 py-3' width='15%' align='center'>email 1</th>
            <th className='px-6 py-3' width='15%' align='center'>email 2</th>
            <th className='px-6 py-3' width='15%' align='center'>email 3</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr className={`border-b ${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`} key={user.id}>
                <td className='px-6 py-4'>
                  <p>{user.name}</p>
                  <p>{user.phone}</p>
                  <p>{user.email}</p>
                </td>
                <td className='px-6 py-4' align='center'>
                  <RowButton
                    isOk={user?.welcomeEmail}
                    onClick={handleSendEmail(user.id, 'welcome')}
                    isLoading={getLoadingButton(user.id, 'welcome')}
                  />
                </td>
                <td className='px-6 py-4' align='center'>
                  <RowButton
                    isOk={user?.remainderEmail}
                    onClick={handleSendEmail(user.id, 'remember')}
                    isLoading={getLoadingButton(user.id, 'remember')}
                  />
                </td>
                <td className='px-6 py-4' align='center'>
                  <RowButton
                    isOk={user?.onlineEmail}
                    onClick={handleSendEmail(user.id, 'lastEmail')}
                    isLoading={getLoadingButton(user.id, 'lastEmail')}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableUsers
