const Footer = () => {
  return (
    <footer className='flex flex-wrap flex-col sm:flex-row justify-between bg-gray-100 px-8 py-3.5 text-sm text-gray-500'>
      <nav className='flex lg:flex-1 sm:flex-auto order-2 lg:order-1 justify-center lg:justify-start py-5 sm:py-0'>
        <ul className='flex items-center gap-8'>
          <li><a className='hover:underline' href='#'>Advertising</a></li>
          <li><a className='hover:underline' href='#'>Business</a></li>
          <li><a className='hover:underline' href='#'>How Search works</a></li>
        </ul>
      </nav>
      <span className='flex lg:flex-1 w-full lg:w-auto order-1 lg:order-2 items-center justify-center gap-2 flex-grow sm:mb-6 lg:mb-0'>
        <img className='h-4' src='/green-leaf.png' alt='green leaf' />
        <a className='hover:underline' href='#'>Carbon neutral since 2007</a>
      </span>
      <nav className='flex lg:flex-1 sm:flex-auto order-3 justify-center lg:justify-end'>
        <ul className='flex items-center gap-8'>
          <li><a className='hover:underline' href="#">Privacy</a></li>
          <li><a className='hover:underline' href="#">Terms</a></li>
          <li><a className='hover:underline' href="#">Settings</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
