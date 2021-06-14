import Head from '../components/Head'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Icon from '../components/Icon'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head />
      <main className='flex flex-col justify-between min-h-screen'>
        <Header />
        <Footer />
      </main>
    </>
  )
}
