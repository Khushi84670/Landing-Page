import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Head>
        <title>Fresh Eats — Landing</title>
        <meta name="description" content="Fresh Eats — restaurant-quality meals delivered fast." />
      </Head>

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
