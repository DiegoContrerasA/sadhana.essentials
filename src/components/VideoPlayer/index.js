'use client'

// import { CURRENT_YEAR } from '@/config/dates'
// import LoadPlayer from './LoadPlayer'
// import ErrorPlayer from './ErrorPlayer'
// import useGetVideo from '@/hooks/useGetVideo'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const VideoPlayer = ({ token }) => {
  // const { loading, error } = useGetVideo(token)

  const router = useRouter()

  useEffect(() => {
    router.replace('/video')
  }, [router])

  // if (loading) return <LoadPlayer />

  // if (error) return <ErrorPlayer />
  return null

//   return (
//     <>
//       <iframe
//         width='100%'
//         height='auto'
//         className='aspect-video'
//         src='https://www.youtube-nocookie.com/embed/smMk6xv2lIU?si=BYRTKxfgRUQDsUHB'
//         title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;' allowfullscreen='allowfullscreen'
//         mozallowfullscreen='mozallowfullscreen'
//         msallowfullscreen='msallowfullscreen'
//         oallowfullscreen='oallowfullscreen'
//         webkitallowfullscreen='webkitallowfullscreen'
//       />
//       <div>
//         <h1 className='text-sm xs:text-3xl text-center w-full mt-4  tracking-[8px] uppercase leading-tight font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#a852b7] to-[#83039d]'>Sadhana Essentials MASTERCLASS</h1>
//         <p className='font-sans text-sm xs:text-2x text-center w-full tracking-[8px] text-[#a852b7]'>{CURRENT_YEAR}</p>
//       </div>
//     </>
//   )
}

export default VideoPlayer
