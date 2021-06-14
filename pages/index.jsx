import Head from '../components/Head'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Icon from '../components/Icon'

export default function Home() {
  return (
    <>
      <Head />
      <main className='flex flex-col justify-between min-h-screen'>
        <Header />
        <section className='flex flex-col items-center'>
          <Logo />
          <form className='w-full max-w-lg my-5'>
            <div className='flex items-center px-3 py-2 border border-gray-200 rounded-full hover:shadow-md'>
              <label htmlFor='google-search'>
                <Icon name='search' classes='text-gray-400 mr-2 text-xl' />
              </label>
              <input id='google-search' className='flex-grow text-gray-700 focus:outline-none' type='text' />
              <Icon name='mic' classes='text-gray-400 ml-2 cursor-pointer text-xl' />
            </div>
          </form>
          <div className='flex gap-3'>
            <button className='bg-gray-100 text-sm text-gray-600 px-3 py-2 rounded hover:shadow'>Google Search</button>
            <button className='bg-gray-100 text-sm text-gray-600 px-3 py-2 rounded hover:shadow'>I'm Feeling Lucky</button>
          </div>
        </section>
        <footer>Footer</footer>
      </main>
    </>
  )
}
