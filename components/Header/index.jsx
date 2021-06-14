import Avatar from '../Avatar'
import Icon from '../Icon'

const Header = () => {
  const avatarUrl = 'https://media-exp3.licdn.com/dms/image/C4D03AQGy8FxmXw42sA/profile-displayphoto-shrink_400_400/0/1585256522144?e=1629331200&v=beta&t=ZgBnucQvNuz4jGSyX52-dXuhog5r39bxDfvj-Rx-xPg'

  return (
    <header className='header flex items-center justify-between h-14 p-1.5 text-sm text-gray-700'>
      <div className='header__left px-4'>
        <nav>
          <ul className='flex items-center gap-4'>
            <li><a className='hover:underline' href='#'>About</a></li>
            <li><a className='hover:underline' href='#'>Store</a></li>
          </ul>
        </nav>
      </div>
      <div className='header__right px-4'>
        <nav>
          <ul className='flex items-center gap-3'>
            <li><a className='hover:underline' href='#'>Gmail</a></li>
            <li><a className='hover:underline' href='#'>Images</a></li>
            <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-gray-200'>
              <Icon classes='text-gray-500' name='apps' />
            </li>
            <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-gray-200'>
              <Avatar url={avatarUrl} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
