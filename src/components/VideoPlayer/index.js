import { forwardRef, useState } from 'react'
import ErrorPlayer from './ErrorPlayer'

const VideoPlayer = forwardRef(({ loading, error, onRetry }, ref) => {
  const [retry, setRetry] = useState(0)

  const handleRentry = () => {
    onRetry()
    setRetry(prev => prev + 1)
  }

  if (error) return <ErrorPlayer onRetry={handleRentry} retry={retry < 3} />

  return (
    <div className='aspect-video w-full relative rounded-xl overflow-hidden'>
      {loading && <div className='aspect-video absolute top-0 left-0 z-10 animate-pulse bg-[#d900ff45] w-full h-full' />}
      <video
        ref={ref}
        onContextMenu={(e) => e.preventDefault()}
        src=''
        className={`aspect-ratio w-full ${loading ? 'opacity-0' : ''}`}
        controls
      />
    </div>
  )
})

export default VideoPlayer
