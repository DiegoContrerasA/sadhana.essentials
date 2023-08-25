import { LOAD_STATUS } from '@/config/loadStatus'
import { useCallback, useEffect, useRef, useState } from 'react'

export const useGetVideo = () => {
  const [loading, setLoading] = useState(LOAD_STATUS.SUCCESS)

  const videoRef = useRef()

  const getVideoBlob = useCallback(() => {
    const myRequest = new Request('https://res.cloudinary.com/dudykjuq5/video/upload/v1692930320/cc4p3ha39szr1h1f71kl.mp4')

    setLoading(LOAD_STATUS.LOADING)
    fetch(myRequest)
      .then((response) => response.blob())
      .then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob)
        videoRef.current.src = objectURL
        videoRef.current.controlsList = 'nodownload'
        setLoading(LOAD_STATUS.SUCCESS)
      }).catch(() => {
        setLoading(LOAD_STATUS.FAIL)
      })
  }, [])

  useEffect(() => {
    // getVideoBlob()
  }, [getVideoBlob])

  return {
    loading: loading === LOAD_STATUS.LOADING,
    error: loading === LOAD_STATUS.FAIL,
    videoRef,
    getVideoBlob
  }
}
