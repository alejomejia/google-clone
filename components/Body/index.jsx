import { useRef } from 'react'
import { useRouter } from 'next/router'

import Logo from '../Logo'
import Icon from '../Icon'
import Button from '../Button'

const Body = () => {
  const searchInputRef = useRef(null)
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <section className='flex flex-col items-center mb-6 px-4'>
      <Logo />
      <form className='w-full max-w-lg my-7'>
        <div className='flex items-center px-4 py-2 border border-gray-200 rounded-full hover:shadow-md'>
          <label htmlFor='google-search' className='flex'>
            <Icon name='search' classes='text-gray-400 mr-2 text-xl' />
          </label>
          <input ref={searchInputRef} id='google-search' className='flex-grow text-gray-700 focus:outline-none' type='text' />
          <Icon name='microphone' classes='w-6 ml-2 cursor-pointer' />
        </div>
      </form>
      <div className='flex gap-3'>
        <Button onClick={handleSearch}>Google Search</Button>
        <Button onClick={handleSearch}>I'm Feeling Lucky</Button>
      </div>
    </section>
  )
}

export default Body
