import styles from './Playtime.module.scss'

const Playtime = ({ hours }) => {
  const hoursToPlay = hours > 0 ? hours : null
  return (
    hoursToPlay && (
      <div className={styles.container}>
        <span className={styles.tittle}>Playtime</span>
        <span> {hours}h </span>
      </div>
    )
  )
}

export default Playtime
