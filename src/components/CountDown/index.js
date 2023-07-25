'use client'

import { useCountDown } from '@/hooks/useCountDown'
import { memo, useEffect, useState } from 'react'

const CountDown = () => {
  const { minutes, seconds, hours, days = 2, hidden } = useCountDown('2023-08-20:19:00:00')

  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  if (hidden || render.current === false) return null

  return (
    <div className='font-sans text-lg text-[#492f4e] flex flex-col xs:flex-row gap-2 items-center relative z-10'>
      <strong>Nos vemos en: </strong>
      <div className='flex gap-1'>
        <span className='flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full p-2'>{days}</span>
        <span className='flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full p-2'>{hours}</span>
        <span className='flex justify-center items-center  w-[40px] h-[40px] bg-white rounded-full p-2'>{minutes}</span>
        <span className='flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full p-2'>{seconds}</span>
      </div>
    </div>
  )
}
export default memo(CountDown)
