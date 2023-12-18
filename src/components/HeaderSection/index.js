const HeaderSection = () => {
  return (
    <header className=' w-full bg-accent bg-gradient-to-b sm:bg-gradient-to-r from-[#E7E0E8] to-[#916a9f] px-8 min-h-screen overflow-hidden relative flex justify-center items-center flex-col text-[#6d4575ba]'>
      <div className='w-[300px] h-[300px] bg-secondaryText rounded-full absolute top-[-100px] left-[-100px] hero' />
      <div className='w-[300px] h-[300px] bg-secondaryText rounded-full absolute bottom-[-100px] right-[-100px] hero' />
      <h1 className='z-10 relative max-w-[90%] text-center font-extrabold text-7xl md:text-9xl'>Sadhana Essentials</h1>
      <h3 className='text-4xl md:text-6xl my-3'> próximamente</h3>
      <h4 className='text-2xl font-light text-center italic'>by Andrea Cardona</h4>
    </header>
  )
}

export default HeaderSection
