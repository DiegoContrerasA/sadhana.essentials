import Button from '../Button'

const AboutMeSection = () => {
  return (
    <div className='grid gap-x-8 gap-y-20 md:grid-cols-2  max-w-screen-xl m-auto'>
      <div className='flex flex-col text-xl md:text-2xl leading-8 font-light md:order-first'>
        <p className='mb-5'>
          Constantemente muchas personas me escriben porque quieren iniciar
          practicar Yoga pero no saben como hacerlo.
        </p>
        <p className='mb-10'>
          Si eso es lo que te preocupa,
          entonces <strong className='font-bold'>esta Masterclass es perfecta para ti,</strong> ya que aprenderás
          las bases del yoga a través de una secuencia de saludos al sol
          y lo mejor de todo es que es <strong className='font-bold'>¡COMPLETAMENTE GRATIS!</strong>
        </p>
        <Button type='link' href='#form' className='m-auto font-bold'>
          ¡Quiero inscribirme!
        </Button>
      </div>

      <div className='overflow-hidden border-8  border-white order-first'>
        <img loading='lazy' src='images/dog.webp' className='w-[100%] h-[100%] object-cover' alt='perro haciendo una parada de manos' />
      </div>

      <div className='overflow-hidden border-8  border-white'>
        <img loading='lazy' src='images/s2.webp' className='w-[100%] h-[100%] object-cover ' alt='mujer sentada sonriendo' />
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
          en caso de que ya lleves un camino recorrido
          poder perfeccionar posturas y
          movimientos.
        </p>
        <h2 className='text-center text-4xl font-bold'>¡Te espero!</h2>
      </div>
    </div>
  )
}

export default AboutMeSection
