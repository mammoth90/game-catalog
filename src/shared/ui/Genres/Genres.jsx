import styles from './Genres.module.scss'

const Genres = ({ genres }) => {
  return (
    <div>
      {genres.map((g) => {
        return (
          <span className={styles.genre} key={g.id}>
            {g.name}
          </span>
        )
      })}
    </div>
  )
}

export default Genres
