const ErrorPlayer = ({ retry, onRetry }) => {
  return (

    <div className='bg-[#d900ff45] aspect-video top-0 left-0 z-10  w-full h-full flex items-center justify-center flex-col'>
      <h1 className='font-bold text-8xl text-white mb-2'>Oops!</h1>
      {retry
        ? <h2 className='text-2xl font-bold  text-white mb-3 max-w-sm text-center font-sans'>Parece que tuvimos problemas al cargar el video.</h2>
        : (
          <p className='text-xl text-white max-w-md text-center mt-3'>
            Estamos teniendo problemas para cargar el video, por favor intenta mas tarde o comunicate con
            <a href='mailto:sadhana.essentials@gmail.com'>
              <strong className='font-sans'> sadhana.essentials@gmail.com</strong>
            </a>
          </p>
          )}
      {retry &&
          (
            <button onClick={onRetry} className='mt-8 text-white max-w-[200px] border-2 border-white px-4 py-1 rounded-md font-bold text-xl ease-in-out duration-200 hover:bg-[#ffffff26]'>
              Reintentar
            </button>
          )}
    </div>
  )
}

export default ErrorPlayer
