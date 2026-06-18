import styles from './GameCard.module.scss'
import cn from 'classnames'
import noImg from './assets/no-img.png'
import Badge from '@/shared/ui/RatingBadge'
import Platforms from '@/shared/ui/Platforms'
import formatDate from '@/shared/utils/formateDate'
import { Link } from 'react-router-dom'
import Genres from '@/shared/ui/Genres'

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
      <Link to={`/game/${game.id}`}>
        <img src={imgCard} className={cardImageClass} alt={game.name} />
        <div className={styles.iconsDetails}>
          <Platforms className={styles.platforms} platforms={game.platforms} />
          <Badge rating={game.rating} width={20} height={20} />
        </div>
        <p className={cardTitleClass}>{game.name}</p>
        <div className={styles.genres}>
          <Genres genres={game.genres} />
        </div>
        <h6 className={styles.gameDetails}>{releaseDate}</h6>
      </Link>
    </div>
  )
}

export default GameCard
