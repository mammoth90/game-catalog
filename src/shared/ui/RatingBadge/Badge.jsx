import styles from './Badge.module.scss'
import cn from 'classnames'

const estimateRate = (number) => {
  if (number > 4) {
    return 'gold'
  } else if (number > 3 && number <= 4) {
    return 'green'
  } else return 'red'
}
const Badge = ({ rating }) => {
  const ratingNotNull = rating > 0 ? rating : null
  const badgeColor = estimateRate(rating)
  const formatedRaiting = rating.toFixed(2)
  const containerClass = cn({
    [styles.badgeContainer]: true,
    [styles.gold]: badgeColor === 'gold',
    [styles.green]: badgeColor === 'green',
    [styles.red]: badgeColor === 'red',
  })

  const ratingClass = cn({
    [styles.badgeRaiting]: true,
    [styles.gold]: badgeColor === 'gold',
    [styles.green]: badgeColor === 'green',
    [styles.red]: badgeColor === 'red',
  })
  const badgeEl = (
    <div className={containerClass} style={{}}>
      <h6 className={ratingClass}>{formatedRaiting}</h6>
    </div>
  )
  return ratingNotNull && badgeEl
}

export default Badge
