import Button from '../Button'
import CountDown from '../CountDown'

const HeaderSection = () => {
  return (
    <header className=' w-full bg-accent bg-gradient-to-r from-[#E7E0E8] to-[#916a9f] px-8'>
      <nav className='flex justify-end p-5 z-20 max-w-screen-2xl m-auto relative min-h-[116px] xs:min-h-[80px]'>
        <div className='w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-secondaryText rounded-full absolute top-[-120px] left-[-100px] sm:top-[-200px] sm:left-[-200px] hero' />
        <CountDown />
      </nav>
      <div className='flex flex-col md:flex-row justify-between relative z-0 max-w-screen-xl m-auto py-10 gap-10 md:py-20'>
        <div className='w-[100%] md:w-[40%] flex-1 flex justify-center items-center'>
          <div className='min-w-[280px] relative z-10'>
            <h3 className='text-2xl sm:text-4xl leading-3 font-light italic text-primary'>Día de</h3>
            <h1 className='text-[90px] xs:text-[120px] sm:text-[150px] font-bold text-primaryText leading-none'>YOGA</h1>
            <p className='text-xl text-center sm:text-2xl font-light leading-none text-[#6d4575ba] mb-10 md:mb-20'>
              Diciembre <strong className='font-sans italic'> 16.2023 </strong>
            </p>
            <Button type='link' href='#form' className='hidden md:flex  w-full min-h-[60px] '>
              ¡Inscríbete ya!
            </Button>
          </div>
        </div>
        <div className='w-[100] md:w-[40%] flex-1 flex justify-center relative'>
          <picture className='relative z-10'>
            <source media='(max-width: 450px)' srcSet='images/header-xs.webp' width={280} height={370} />
            <source media='(max-width: 640px)' srcSet='images/header-sm.webp' width={320} height={423} />
            <img
              src='images/header-md.webp'
              alt='mujer con camisa negra, pantalon rojo haciendo una pose de yoga'
              width={450} height={495}
            />
          </picture>
          <div className='w-[500px] h-[500px]
            xs:w-[600px] xs:h-[600px]
            sm:w-[700px] sm:h-[700px]
            md:w-[600px] md:h-[600px]
             lg:w-[700px] lg:h-[700px]
              bg-secondaryText absolute rounded-full hero bottom-2'
          />
        </div>
        <div>
          <Button href='#form' type='link' className='w-[220px] md:hidden mb-10 sm:mt-10 mx-auto'>
            ¡Inscríbete ya!
          </Button>
        </div>
      </div>
    </header>
  )
}

export default HeaderSection
