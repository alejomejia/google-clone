import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ onClick, children }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Button
