import VideoPlayer from '@/components/VideoPlayer'
import { verifyToken } from '@/services/verifyToken'

// export const dynamic = 'force-dynamic'

const Video = async ({ params }) => {
  await verifyToken(params?.token)

  return (
    <VideoPlayer />
  )
}

export default Video
