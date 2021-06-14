import Head from '../components/Head'
import Header from '../components/Header'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <>
      <Head />
      <main className='flex flex-col justify-between min-h-screen'>
        <Header />
        <footer>Footer</footer>
      </main>
    </>
  )
}
