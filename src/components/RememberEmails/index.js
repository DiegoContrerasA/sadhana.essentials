'use client'

import useSendEmails from '@/hooks/useSendEmails'

const RememberEmails = () => {
  const { loading, send } = useSendEmails()

  const handleSendEmail = (path) => async () => {
    await send(path)
  }

  const isLoadingRemember = loading && loading === 'remember'
  const isLoadingLast = loading && loading === 'lastEmail'
  const isLoadingPrevious = loading && loading === 'previous'

  return (
    <div className='my-10'>
      <div className='flex justify-end mb-3 gap-3 text-gray-700 items-center'>
        <p className='font-bold'>Enviar recordatorios:</p>
        <button onClick={handleSendEmail('remember')} disabled={isLoadingRemember} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-gray-800'>
          {isLoadingRemember ? 'loading ...' : 'Previous day'}
        </button>
        <button onClick={handleSendEmail('previous')} disabled={isLoadingPrevious} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-gray-800'>
          {isLoadingPrevious ? 'loading ...' : 'Previous hour'}
        </button>
        <button onClick={handleSendEmail('lastEmail')} disabled={isLoadingLast} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-gray-800'>
          {isLoadingLast ? 'loading ...' : 'Online'}
        </button>
      </div>
    </div>
  )
}

export default RememberEmails
