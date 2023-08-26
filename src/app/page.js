import HeaderSection from '@/components/HeaderSection'
import MasterClassSection from '@/components/MasterClassSection'
import AboutMeSection from '@/components/AboutMeSection'
import ContactMeSection from '@/components/ContactMeSection'
import FooterSection from '@/components/FooterSection'
import Hotjear from '@/components/Hotjear'

export default function Home () {
  return (
    <main className='overflow-hidden'>
      <Hotjear />
      <HeaderSection />
      <section className='py-40 bg-secondaryText px-8'>
        <MasterClassSection />
      </section>
      <section className='bg-[#ebe0de] text-primaryText px-8 py-40'>
        <AboutMeSection />
      </section>
      <section id='form' className='bg-[#804994] py-40 px-8'>
        <ContactMeSection />
      </section>
      <FooterSection />
    </main>
  )
}
