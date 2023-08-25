import Link from 'next/link'

const ThankYou = () => {
  return (
    <main className='flex flex-col w-screen min-h-full justify-center items-center p-10 bg-primary'>
      <div className='flex flex-col items-center text-center'>
        <img
          src='/images/flower.png'
          alt='flower'
          className='mb-5 w-[250px] sm:w-[300px]'
        />
        <h1 className='text-2xl font-bold sm:text-6xl text-white'>GRACIAS POR</h1>
        <h2 className='text-2xl font-bold sm:text-6xl text-primaryText mb-2'>REGISTRARTE</h2>
        <p className='text-xl font-bold max-w-md sm:text-3xl text-white'>Pronto nos veremos en el Masterclass ¡No te lo pierdas!</p>
        <Link href='/' className='mt-8 text-primaryText max-w-[200px] border-2 border-primaryText px-4 py-1 rounded-md font-bold text-xl ease-in-out duration-200 hover:bg-[#6d457536]'>
          Volver al sitio
        </Link>
      </div>
    </main>
  )
}

export default ThankYou
