'use client'

import { CURRENT_YEAR } from '@/config/dates'

const VideoPlayer = () => {
  return (
    <>
      <video
        onContextMenu={(e) => e.preventDefault()}
        src='https://res.cloudinary.com/dudykjuq5/video/upload/v1692930320/cc4p3ha39szr1h1f71kl.mp4'
        className='aspect-video w-full'
        controls
      />
      <div>
        <h1 className='text-sm xs:text-3xl text-center w-full mt-4  tracking-[8px] uppercase leading-tight font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#a852b7] to-[#83039d]'>Sadhana Essentials MASTERCLASS</h1>
        <p className='font-sans text-sm xs:text-2x text-center w-full tracking-[8px] text-[#a852b7]'>{CURRENT_YEAR}</p>
      </div>
    </>
  )
}

export default VideoPlayer
