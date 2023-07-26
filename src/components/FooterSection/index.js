import { CURRENT_YEAR } from '@/config/dates'

const FooterSection = () => {
  return (
    <footer className='px-8 py-10 bg-[#9570a2] text-center border-t-2 text-gray-700'>
      <p className='text-xl text-gray-100 max-w-lg m-auto'>
        Desarrollado con mucho 🤍 por <span className='text-white font-bold'>sadhana.essentials</span>  <strong className='font-sans text-white'>{CURRENT_YEAR}</strong>, siguenos en <a className='font-bold text-white' href='https://www.instagram.com/sadhana_essentials/' target='_blank' rel='noreferrer'>Instagram</a>
      </p>
    </footer>
  )
}

export default FooterSection
