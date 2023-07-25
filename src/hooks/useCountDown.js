import { useEffect, useRef, useState } from 'react'

const DEFAULT_VALUE = '00'

const getMinutesAndSeconds = (remainTime) => {
  const seconds = remainTime
    ? `0${Math.floor(remainTime % 60)}`.slice(-2)
    : DEFAULT_VALUE
  const minutes = remainTime
    ? `0${Math.floor((remainTime / 60) % 60)}`.slice(-2)
    : DEFAULT_VALUE
  const hours = remainTime
    ? `0${Math.floor((remainTime / 3600) % 24)}`.slice(-2)
    : DEFAULT_VALUE

  const days = remainTime
    ? `0${Math.floor(remainTime / (3600 * 24))}`.slice(-2)
    : DEFAULT_VALUE

  return {
    minutes,
    seconds,
    hours,
    days
  }
}

const getRemainTime = (endTime) => {
  const now = new Date()
  return (new Date(endTime) - now + 1000) / 1000
}

export const useCountDown = (endTime) => {
  const [timer, setTimer] = useState(
    getMinutesAndSeconds(getRemainTime(endTime))
  )

  const [hidden, setHidden] = useState(() => new Date(endTime) < new Date())
  const intervalRef = useRef()

  useEffect(() => {
    let { current: interval } = intervalRef
    const remainTime = getRemainTime(endTime)

    if (remainTime <= 0) {
      interval && clearInterval(interval)
      setHidden(true)
      return
    }

    setTimer(getMinutesAndSeconds(getRemainTime(endTime)))

    interval = setInterval(() => {
      const remainTime = getRemainTime(endTime)

      if (remainTime <= 0) {
        window.location.reload()
        interval && clearInterval(interval)
        return
      }

      setTimer(() => getMinutesAndSeconds(remainTime))
    }, 1000)

    return () => {
      interval && clearInterval(interval)
    }
  }, [endTime])

  return { ...timer, hidden }
}
