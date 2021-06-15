import HTMLHead from 'next/head'
import PropTypes from 'prop-types'

const Head = ({ title, children }) => {
  return (
    <HTMLHead>
      <title>{title}</title>
      <link rel='icon' href='/favicon.png' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Roboto&family=Material+Icons&display=swap' rel='stylesheet' />
      {children}
    </HTMLHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Head
