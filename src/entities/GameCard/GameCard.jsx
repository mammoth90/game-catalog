import styles from './GameCard.module.scss'
import cn from 'classnames'
import noImg from './assets/no-img.png'
import Badge from '../../shared/ui/RatingBadge'
import Platforms from '../../shared/ui/Platforms'

const getEnding = (day) => {
  switch (day) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    case 0:
      return ''
    default:
      return 'th'
  }
}
const months = {
  0: null,
  1: 'January',
  2: 'Febraury',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'Novemer',
  12: 'October',
}
const formatDate = (date) => {
  const releasedDate = new Date(date)
  const monthNum = releasedDate.getMonth()
  const month = months[monthNum]
  const day = releasedDate.getDay()
  const year = releasedDate.getFullYear()
  const buildStringDate = (month, day, year) => {
    const prefix = 'released'
    if (month && day !== 0) {
      return `${prefix}: ${day}${getEnding(day)} of ${month} ${year}`
    }
    return `${prefix}: ${year}`
  }

  return buildStringDate(month, day, year)
}
const GameCard = ({ game }) => {
  const releaseDate = formatDate(game.released)
  const imgCard = game.background_image || noImg
  const cardClass = cn({
    [styles.gameCard]: true,
  })
  const cardImageClass = cn({
    [styles.cardImage]: true,
  })
  const cardTitleClass = cn({
    [styles.cardTitle]: true,
  })
  return (
    <div className={cardClass}>
      <img src={imgCard} className={cardImageClass} alt={game.name} />
      <div className={styles.iconsDetails}>
        <Platforms platforms={game.platforms} />
        <Badge rating={game.rating} width={20} height={20} />
      </div>
      <p className={cardTitleClass}>{game.name}</p>
      <div className={styles.genres}>
        {game.genres.map((g) => (
          <span key={g.id}>{g.name}</span>
        ))}{' '}
      </div>
      <h6 className={styles.gameDetails}>{releaseDate}</h6>
    </div>
  )
}

export default GameCard
