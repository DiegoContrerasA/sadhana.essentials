'use client'

import { VIDEO_ERRORS } from '@/config/errors'
import { LOAD_STATUS } from '@/config/loadStatus'
import { getVideo } from '@/services/users'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const useGetVideo = (token) => {
  const [loading, setLoading] = useState(LOAD_STATUS.LOADING)

  const router = useRouter()

  useEffect(() => {
    getVideo(token)
      .then(() => setLoading(LOAD_STATUS.SUCCESS))
      .catch((e) => {
        if (e?.message === VIDEO_ERRORS.MISSING_TOKEN) {
          return router.replace('/video')
        }
        setLoading(LOAD_STATUS.FAIL)
      })
  }, [token])

  return {
    loading: LOAD_STATUS.LOADING === loading,
    error: LOAD_STATUS.FAIL === loading
  }
}

export default useGetVideo
