'use client'

import { memo, useEffect, useState } from 'react'
import Wrap from './Wrap'

const CountDown = () => {
  const [render, setRender] = useState(null)

  useEffect(() => {
    setRender('2023-08-20:19:00:00')
  }, [])

  if (!render) return null

  return <Wrap date={render} />
}
export default memo(CountDown)
