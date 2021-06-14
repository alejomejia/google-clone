import Logo from '../Logo'
import Icon from '../Icon'

const Body = () => {
  return (
    <section className='flex flex-col items-center mb-6'>
      <Logo />
      <form className='w-full max-w-lg my-7'>
        <div className='flex items-center px-4 py-2 border border-gray-200 rounded-full hover:shadow-md'>
          <label htmlFor='google-search'>
            <Icon name='search' classes='text-gray-400 mr-2 text-xl' />
          </label>
          <input id='google-search' className='flex-grow text-gray-700 focus:outline-none' type='text' />
          <Icon name='microphone' classes='w-6 ml-2 cursor-pointer' />
        </div>
      </form>
      <div className='flex gap-3'>
        <button className='bg-gray-100 text-sm text-gray-600 px-3 py-2 rounded hover:shadow'>Google Search</button>
        <button className='bg-gray-100 text-sm text-gray-600 px-3 py-2 rounded hover:shadow'>I'm Feeling Lucky</button>
      </div>
    </section>
  )
}

export default Body
