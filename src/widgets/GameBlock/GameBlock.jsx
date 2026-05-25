import { SlArrowLeft as Left, SlArrowRight as Right } from 'react-icons/sl'
import { useGetGamesQuery } from '../../services/api/reducer.js'
import styles from './GameBlock.module.scss'
import GameCard from '../../entities/GameCard'
import cn from 'classnames'
import { useRef } from 'react'
import Loading from '../../shared/ui/Loading'
import Error from '../../shared/ui/Error'

const GameBlock = ({ title, queryParams }) => {
  const { data, isLoading, error } = useGetGamesQuery({
    ...queryParams,
  })
  const refEl = useRef(null)
  const games = data?.results ?? []
  if (isLoading) return  <Loading />
  if (error) return <Error />

  const cardsBlock = cn({
    [styles.cardsBlock]: true,
  })

  const blockTitle = cn({
    [styles.blockTitle]: true,
  })
  const container = cn({
    [styles.container]: true,
  })

  const scroll = (dir) => {
    const step = dir === 'left' ? -300 : 300
    if (refEl.current) {
      refEl.current.scrollBy({
        left: step,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className={container}>
      <p className={blockTitle}>{title}</p>
      <button className={styles.buttonLeft} onClick={() => scroll('left')}>
        <Left />
      </button>
      <div className={cardsBlock} ref={refEl}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <button className={styles.buttonRight} onClick={() => scroll('right')}>
        <Right />
      </button>
    </div>
  )
}

export default GameBlock
