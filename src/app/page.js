import Button from '@/components/Button'

export default function Home () {
  return (
    <main className='overflow-hidden'>
      <header className=' w-full bg-accent bg-gradient-to-r from-[#E7E0E8] to-[#916a9f]'>
        <nav className='flex justify-end p-5 z-0 max-w-screen-2xl m-auto relative '>
          <div className='w-[400px] h-[400px] bg-secondaryText rounded-full absolute top-[-150px] left-[-100px] hero' />
          <ul>
            <li>redes</li>
          </ul>
        </nav>
        <div className='flex justify-between relative z-0 max-w-screen-xl m-auto py-24 gap-10'>
          <div className=' w-[40%] flex-1 flex justify-center items-center'>
            <div className='min-w-[280px] relative z-10'>
              <h3 className='text-4xl leading-3 font-light italic text-primary'>Dia de</h3>
              <h1 className='text-[150px] font-bold text-primaryText leading-none'>YOGA</h1>
              <p className='text-center text-2xl font-light leading-none text-[#6d4575ba] mb-20'>
                agosto <strong className='font-sans italic'> 20.2023 </strong>

              </p>
              <Button className='w-full'>
                ¡Inscríbete ya!
              </Button>
            </div>
          </div>
          <div className=' w-[40%] flex-1 flex justify-center relative'>
            <img src='images/header-2.webp' className='w-[450px] h-auto relative z-10' />
            <div className='w-[650px] h-[650px] bg-secondaryText absolute rounded-full hero bottom-2' />
          </div>
        </div>

      </header>

      <section>
        <h1>MasterClass: Desde la base juntos crecemos</h1>
        <p>¿Sabías que puedes <strong>aprender las base de yoga</strong>
          como lo son postura básicas, saludos al sol y a
          través de ellos crear tu propia secuencia?
        </p>
        <img src='images/s1.webp' />
      </section>
      <section>

        <p>
          Constantemente muchas personas me escriben porque
          quieren
          iniciar
          practicar Yoga pero no saben como hacerlo. Si eso es lo que te preocupa,
          entonces <strong>esta Masterclass es perfecta para ti,</strong> ya que aprenderás
          las bases del yoga a través de una secuencia de saludos al sol
          y lo mejor de todo es que es <strong>¡COMPLETAMENTE GRATIS!</strong>
        </p>
        <img src='images/dog.webp' />

        <img src='images/s2.webp' />
        <p>
          Me llamo  <strong>Andrea Cardona,</strong> y soy profesora de yoga certificada hace 4 años e
          ingeniera civil de profesión.
        </p>
        <p>

          Al igual que tú antes de iniciar a practicar yoga no sabía por donde
          empezar y no tenía mucha flexibilidad. Con el tiempo me fui adentrando en este mundo
          y descubrí que mi verdadera pasión era guiar a otros por medio de esta linda práctica.
        </p>
        <p>

          Amo ser profesora y poder compartir con mis alumnos herramientas para
          poder tener una vida más saludable y tranquila por medio del yoga.
        </p>
        <p>
          En este <strong>MasterClass</strong> te daré las bases y
          te guiaré para que tengas tu iniciación con el yoga, o
          en caso de que ya lleves un camino recorrido.
          poder perfeccionar posturas y
          movimientos.
        </p>
        <h4>¡Te espero!</h4>
      </section>
      <footer>
        <h3>Faltan solo</h3>
      </footer>
    </main>
  )
}
