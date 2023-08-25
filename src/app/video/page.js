'use client'

import VideoPlayer from '@/components/VideoPlayer'
import { CURRENT_YEAR } from '@/config/dates'
import { useGetVideo } from '@/hooks/useGetVideo'

// token sera el id del usuario en base de datos

const Video = () => {
  const { videoRef, loading, error, getVideoBlob } = useGetVideo()

  return (
    <div className='flex justify-center items-center min-h-full bg-accent bg-gradient-to-r from-[#28162b] to-[#4f2e55] py-10 px-5 flex-col'>
      <div className='w-full max-w-5xl rounded-xl overflow-hidden shadow-sm'>
        <VideoPlayer
          ref={videoRef}
          loading={loading}
          error={error}
          onRetry={getVideoBlob}
        />
        <div>
          <h1 className='text-sm xs:text-3xl text-center w-full mt-4  tracking-[8px] uppercase leading-tight font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#a852b7] to-[#83039d]'>Sadhana Essentials MASTERCLASS</h1>
          <p className='font-sans text-sm xs:text-2x text-center w-full tracking-[8px] text-[#a852b7]'>{CURRENT_YEAR}</p>
        </div>
      </div>
    </div>
  )
}

export default Video
