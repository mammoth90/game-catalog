import Logo from './assets/metacritic.svg?react'
import styles from './Metacritic.module.scss'
import cn from 'classnames'

const Metacritic = ({ rate, url }) => {
  const containerClass = cn({
    [styles.container]: true,
    [styles.green]: rate >= 75,
    [styles.yellow]: rate < 75 && rate >= 50,
    [styles.red]: rate < 50,
  })
  return (
    rate && (
      <a href={url} className={containerClass}>
        <Logo className={styles.logo} />
        <span className={styles.number}> {rate} </span>
      </a>
    )
  )
}

export default Metacritic
