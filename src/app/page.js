import Button from '@/components/Button'
import Card from '@/components/Card'
import CountDown from '@/components/CountDown'
import Input from '@/components/Input'

export default function Home () {
  return (
    <main className='overflow-hidden'>
      <header className=' w-full bg-accent bg-gradient-to-r from-[#E7E0E8] to-[#916a9f] px-8'>
        <nav className='flex justify-end p-5 z-0 max-w-screen-2xl m-auto relative '>
          <div className='w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-secondaryText rounded-full absolute top-[-120px] left-[-100px] sm:top-[-200px] sm:left-[-200px] hero' />
          <CountDown />
        </nav>
        <div className='flex flex-col md:flex-row justify-between relative z-0 max-w-screen-xl m-auto py-10 gap-10 md:py-20'>
          <div className='w-[100%] md:w-[40%] flex-1 flex justify-center items-center'>
            <div className='min-w-[280px] relative z-10'>
              <h3 className='text-2xl sm:text-4xl leading-3 font-light italic text-primary'>Dia de</h3>
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
      <section className='py-40 bg-secondaryText px-8'>
        <div className='max-w-screen-xl m-auto text-primaryText flex flex-col items-center'>
          <h1 className='text-4xl md:text-5xl mb-5 text-center'>MasterClass: Desde la base juntos crecemos</h1>
          <p className='text-center text-xl md:text-2xl max-w-2xl font-light'>¿Sabías que puedes <strong>aprender las base de yoga </strong>
            como lo son postura básicas, saludos al sol y a
            través de ellos crear tu propia secuencia?
          </p>
          <picture className='border-8 rounded-full border-white my-10'>
            <img className='w-[280px] h-[280px] r md:w-[400px] md:h-[400px] object-cover rounded-full' src='images/s1.webp' />
          </picture>
          <h3 className='text-3xl font-bold mb-10 text-center'>En el MasterClass aprenderás</h3>
          <div className='grid gap-8 grind-cols-1 md:grid-cols-2 grid-rows-2'>
            <Card text='Posturas bases para comenzar a
                practicar yoga'
            />
            <Card text=' Cómo intencionar la práctica
                usando Mudra'
            />
            <Card text='Posturas bases para comenzar a
                practicar yoga'
            />
            <Card text='Manejo de la respiración a
                través del yoga'
            />
          </div>
        </div>
      </section>
      <section className='bg-[#ebe0de] text-primaryText px-8 py-40'>
        <div className='grid gap-x-8 gap-y-20 md:grid-cols-2  max-w-screen-xl m-auto'>
          <div className='flex flex-col text-xl md:text-2xl leading-8 font-light md:order-first'>
            <p className='mb-5'>
              Constantemente muchas personas me escriben porque
              quieren
              iniciar
              practicar Yoga pero no saben como hacerlo.
            </p>
            <p className='mb-10'>
              Si eso es lo que te preocupa,
              entonces <strong className='font-bold'>esta Masterclass es perfecta para ti,</strong> ya que aprenderás
              las bases del yoga a través de una secuencia de saludos al sol
              y lo mejor de todo es que es <strong className='font-bold'>¡COMPLETAMENTE GRATIS!</strong>
            </p>
            <a href='#form' className='m-auto font-bold'>
              <Button>
                ¡Quiero inscribirme!
              </Button>
            </a>
          </div>

          <div className='overflow-hidden border-8  border-white order-first'>
            <img src='images/dog.webp' className='w-[100%] h-[100%] object-cover ' />
          </div>

          <div className='overflow-hidden border-8  border-white'>
            <img src='images/s2.webp' className='w-[100%] h-[100%] object-cover ' />
          </div>

          <div className='md:text-2xl text-xl leading-8 font-light'>
            <p className='mb-8'>
              Me llamo  <strong className='font-bold'>Andrea Cardona,</strong> y soy profesora de yoga certificada hace <strong className='font-sans'>4</strong> años e
              ingeniera civil de profesión.
            </p>
            <p className='mb-8'>

              Al igual que tú antes de iniciar a practicar yoga no sabía por donde
              empezar y no tenía mucha flexibilidad. Con el tiempo me fui adentrando en este mundo
              y descubrí que mi verdadera pasión era guiar a otros por medio de esta linda práctica.
            </p>
            <p className='mb-8'>

              Amo ser profesora y poder compartir con mis alumnos herramientas para
              poder tener una vida más saludable y tranquila por medio del yoga.
            </p>
            <p className='mb-8'>
              En este <strong className='font-bold'>MasterClass</strong> te daré las bases y
              te guiaré para que tengas tu iniciación con el yoga, o
              en caso de que ya lleves un camino recorrido.
              poder perfeccionar posturas y
              movimientos.
            </p>
            <h4 className='text-center text-4xl font-bold'>¡Te espero!</h4>
          </div>
        </div>
      </section>
      <section id='form' className='bg-[#9570a2] py-40 px-8'>
        <div className='max-w-screen-lg m-auto'>
          <h3 className='text-gray-100 text-2xl text-center mb-10'>regístrate
            a mi <strong className='font-bold'>MasterClass</strong> totalmente gratuita este <strong className='font-sans'>20</strong> de
            agosto a las <strong className='font-sans'>7:00 p.m</strong> hora de Colombia,
            completando la siguiente información:
          </h3>
          <form className='max-w-lg m-auto flex flex-col gap-10'>
            <Input label='Nombre' id='name' name='name' placeholder='Ingrese su nombre' />
            <Input label='Correo electronico' id='email' name='email' placeholder='Ingrese su correo electronico' />
            <Input label='Número telefono' id='phone' name='phone' placeholder='Ingrese su número de telefono' />
            <Button>
              Registrarme
            </Button>
          </form>
        </div>
      </section>
      <footer className='px-8 py-10 bg-[#9570a2] text-center border-t-2 text-gray-700'>
        <p className='text-xl text-gray-100 max-w-lg m-auto'>
          Desarrollado con mucho 🤍 por <span className='text-white font-bold'>sadhana.essentials</span>  <strong className='font-sans text-white'>2023</strong>, siguenos en <a className='font-bold text-white' href='https://www.instagram.com/sadhana_essentials/' target='_blank' rel='noreferrer'>Instagram</a>
        </p>
      </footer>
    </main>
  )
}
