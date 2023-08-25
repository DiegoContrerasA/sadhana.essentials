'use client'

import Hotjar from '@hotjar/browser'
import { useEffect } from 'react'

const Hotjear = () => {
  useEffect(() => {
    Hotjar.init(3627284, 6)
  }, [])
  return (
    <></>
  )
}

export default Hotjear
