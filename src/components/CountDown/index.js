'use client'

import { memo, useEffect, useState } from 'react'
import CountDownElement from './CountDownElement'
import { DATE } from '@/config/dates'

const CountDown = () => {
  const [render, setRender] = useState(null)

  useEffect(() => {
    setRender(DATE)
  }, [])

  if (!render) return null

  return <CountDownElement date={render} />
}
export default memo(CountDown)
