import GameBlock from '../../widgets/GameBlock'
import styles from './Main.module.scss'
import { useGetGamesQuery } from '@/services/api/reducer'

const page_size = 10
const topGameProps = {
  title: 'TOP GAMES',
  queryParams: {
    page: 1,
    page_size,
    metacritic: '80,100',
    ordering: '-metacritic',
  },
}
const announcedGameProp = {
  title: 'ANNOUNCED GAMES',
  queryParams: {
    page: 1,
    page_size,
    ordering: '-released',
  },
}
const lastAddedGamesProps = {
  title: 'LAST ADDED GAMES',
  queryParams: {
    page: 1,
    page_size,
    ordering: '-added',
  },
}

const Main = () => {
  const topGames = useGetGamesQuery({ ...topGameProps.queryParams })
  const lastAddedGames = useGetGamesQuery({
    ...lastAddedGamesProps.queryParams,
  })
  const announcedGame = useGetGamesQuery({ ...announcedGameProp.queryParams })
  return (
    <div className={styles.main}>
      <GameBlock title={topGameProps.title} responce={topGames} />
      <GameBlock title={lastAddedGamesProps.title} responce={lastAddedGames} />

      <GameBlock title={announcedGameProp.title} responce={announcedGame} />
    </div>
  )
}

export default Main
