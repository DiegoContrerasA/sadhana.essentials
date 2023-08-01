import { LIST_OF_ITEMS } from '@/config/items'
import Card from '../Card'

const MasterClassSection = () => {
  return (
    <div className='max-w-screen-xl m-auto text-primaryText flex flex-col items-center'>
      <h1 className='text-4xl md:text-5xl mb-5 text-center'>MasterClass: Desde la base juntos crecemos</h1>
      <p className='text-center text-xl md:text-2xl max-w-2xl font-light'>¿Sabías que puedes <strong>aprender las base de yoga </strong>
        como lo son postura básicas, saludos al sol y a
        través de ellos crear tu propia secuencia?
      </p>
      <picture className='border-8 rounded-full border-white my-10 overflow-hidden'>
        <source media='(max-width: 450px)' srcSet='images/s1-xs.webp' width={280} height={280} />
        <img
          src='images/s1-md.webp'
          alt='mujer con camisa azul, pantalon negro haciendo una pose de yoga'
          width={400} height={400}
          loading='eager'
        />
      </picture>

      <h2 className='text-3xl font-bold mb-10 text-center'>En el MasterClass aprenderás</h2>
      <div className='grid gap-8 grind-cols-1 md:grid-cols-2 grid-rows-2'>
        {LIST_OF_ITEMS.map(({ id, text }) => <Card key={id} text={text} />)}
      </div>
    </div>
  )
}

export default MasterClassSection
