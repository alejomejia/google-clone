import Head from '../components/Head'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head />
      <main className='flex flex-col justify-between min-h-screen'>
        <Header />
        <Body />
        <Footer />
      </main>
    </>
  )
}
