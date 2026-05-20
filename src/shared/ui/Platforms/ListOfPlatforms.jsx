import styles from './Platfroms.module.scss'

const ListOfPlatforms = ({ names }) => {
  return (
    <ul className={styles.platformsList}>
      {names.map(([name, id]) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}

export default ListOfPlatforms
