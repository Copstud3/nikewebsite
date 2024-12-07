import Hero from './sections/Hero'
import Nav from './components/Nav'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import BackToTopButton from './components/BackToTopButton'


export default function App() {
  return (
    <main className="relative">
      <Nav/> 
      <section className="xl:padding-l wide:padding-r padding-b">
       <Hero />
      </section>
      <section className="padding">
        <PopularProducts/> 
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer /> 
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews /> 
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe /> 
      </section>
      <section className="padding-x bg-black padding-t pb-8 text-white">
        <Footer /> 
      </section>
      <BackToTopButton />
    </main>
  )
}