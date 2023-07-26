import Button from '../Button'
import CountDown from '../CountDown'

const HeaderSection = () => {
  return (
    <header className=' w-full bg-accent bg-gradient-to-r from-[#E7E0E8] to-[#916a9f] px-8'>
      <nav className='flex justify-end p-5 z-0 max-w-screen-2xl m-auto relative min-h-[116px] xs:min-h-[80px]'>
        <div className='w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-secondaryText rounded-full absolute top-[-120px] left-[-100px] sm:top-[-200px] sm:left-[-200px] hero' />
        <CountDown />
      </nav>
      <div className='flex flex-col md:flex-row justify-between relative z-0 max-w-screen-xl m-auto py-10 gap-10 md:py-20'>
        <div className='w-[100%] md:w-[40%] flex-1 flex justify-center items-center'>
          <div className='min-w-[280px] relative z-10'>
            <h3 className='text-2xl sm:text-4xl leading-3 font-light italic text-primary'>Día de</h3>
            <h1 className='text-[90px] xs:text-[120px] sm:text-[150px] font-bold text-primaryText leading-none'>YOGA</h1>
            <p className='text-xl text-center sm:text-2xl font-light leading-none text-[#6d4575ba] mb-10 md:mb-20'>
              agosto <strong className='font-sans italic'> 20.2023 </strong>
            </p>
            <a href='#form' className='hidden md:block'>
              <Button className='w-full min-h-[60px] '>
                ¡Inscríbete ya!
              </Button>
            </a>
          </div>
        </div>
        <div className='w-[100] md:w-[40%] flex-1 flex justify-center relative'>
          <img
            src='images/header-2.webp'
            className='min-w-[280px] h-[370px] aspect-[280/370]
              xs:w-[320px] xs:h-[422px] xs:aspect-[320/422]
               sm:w-[450px] sm:h-[593px] relative z-10'
            alt='mujer con camisa negra, pantalon rojo haciendo una pose de yoga'
          />
          <div className='w-[500px] h-[500px]
            xs:w-[550px] xs:h-[550px]
             sm:w-[650px] sm:h-[650px]
              bg-secondaryText absolute rounded-full hero bottom-2'
          />
        </div>
        <a href='#form' className='mb-10 sm:mt-10 mx-auto'>
          <Button className='w-[220px] md:hidden'>
            ¡Inscríbete ya!
          </Button>
        </a>
      </div>
    </header>
  )
}

export default HeaderSection
