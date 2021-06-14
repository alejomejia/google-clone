import styles from './Avatar.module.scss'

const Avatar = ({ url }) => {
  return <img className={styles.avatar} src={url} alt='profile picture' loading='lazy' />
}

export default Avatar
