import styles from './App.module.scss'
import Menu from './widgets/Menu'
import GameBlock from './widgets/GameBlock'

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
const menuProps = [
  {
    id: 1,
    name: 'home',
  },
  {
    id: 2,
    name: 'Top',
  },
  {
    id: 3,
    name: 'Games',
  },
  {
    id: 4,
    name: 'Wishlist',
  },
  {
    id: 5,
    name: 'Cart',
  },
]

function App() {
  return (
    <div className={styles.mainContainer}>
      <aside className={styles.sideMenu}>
        <div className={styles.logo}> LOGO PLACE </div>
        <Menu items={menuProps} />
      </aside>
      <main className={styles.main}>
        <div className={styles.searchForm}>search-form </div>
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
      </main>
    </div>
  )
}

export default App
