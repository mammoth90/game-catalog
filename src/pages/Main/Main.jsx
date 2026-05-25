import GameBlock from "../../widgets/GameBlock"
import styles from './Main.module.scss'

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
const lastAddedGames = {
  title: 'LAST ADDED GAMES',
  queryParams: {
    page: 1,
    page_size,
    ordering: '-added',
  },
}
const Main = () => {
   return (
    <div className={styles.main}>
        <GameBlock
          title={topGameProps.title}
          queryParams={topGameProps.queryParams}
        />
        <GameBlock
          title={lastAddedGames.title}
          queryParams={lastAddedGames.queryParams}
        />
        <GameBlock
          title={announcedGameProp.title}
          queryParams={announcedGameProp.queryParams}
        />
    </div>
  )
}

export default Main
