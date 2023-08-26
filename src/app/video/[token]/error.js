'use client'

import { VIDEO_ERRORS } from '@/config/errors'
import { notFound } from 'next/navigation'

const Error = ({ error }) => {
  console.log({ error })
  if ([VIDEO_ERRORS.INVALID_TOKEN, VIDEO_ERRORS.MISSING_TOKEN].includes(error?.message)) {
    notFound()
    return null
  }

  return (
    <div className='bg-[#d900ff45] aspect-video top-0 left-0 z-10  w-full h-full flex items-center justify-center flex-col'>
      <h1 className='font-bold text-8xl text-white mb-2'>Oops!</h1>

      <p className='text-xl text-white max-w-md text-center mt-3'>
        Estamos teniendo problemas para cargar el video, por favor intenta mas tarde o comunicate con
        <a href='mailto:sadhana.essentials@gmail.com'>
          <strong className='font-sans'> sadhana.essentials@gmail.com</strong>
        </a>
      </p>
    </div>
  )
}

export default Error
