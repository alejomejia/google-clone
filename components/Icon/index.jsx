import Microphone from './svg/Microphone'

const Icon = ({ name, classes = '' }) => {
  return (
    name === 'microphone'
      ? (
        <span className={classes}>
          <Microphone />
        </span>
      )
      : <span className={`material-icons ${classes}`}>{name}</span>
  )
}

export default Icon
