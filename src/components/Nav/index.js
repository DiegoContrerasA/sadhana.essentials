'use client'

import { signOut } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='border-gray-200 bg-gray-50 mb-8'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <p className='font-bold'>Sadhana.essentials</p>
        <button onClick={() => signOut({ redirect: '/auth' })} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-1'>
          Salir
        </button>
      </div>
    </nav>
  )
}

export default Nav
