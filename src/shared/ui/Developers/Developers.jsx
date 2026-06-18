import styles from './Developers.module.scss'

const Developers = ({ developers }) => {
  if (developers.length === 0) return null
  const [developer] = developers
  return (
    <div className={styles.container}>
      <span className={styles.tittle}>Developer: </span>
      <span className={styles.name}> {developer.name} </span>
    </div>
  )
}

export default Developers
