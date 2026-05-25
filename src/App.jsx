import styles from './App.module.scss'
import Menu from './widgets/Menu'
import Logo from './assets/logo.png'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Games from './pages/Games'

const menuProps = [
  {
    id: 1,
    name: 'HOME',
    link: '/',
  },
  {
    id: 2,
    name: 'GAMES',
    link: '/games',
  },
  {
    id: 3,
    name: 'DEVELOPERS',
    link: '',
  },
  {
    id: 4,
    name: 'PLATFORMS',
    link: '',
  },
]

function App() {
  return (
    <BrowserRouter>
    <div className={styles.mainContainer}>
      <aside className={styles.sideMenu}>
    <div className={styles.logoContainer}>
    <img src={Logo} className={styles.logo} />
    </div>
        <Menu items={menuProps} />
      </aside>
      <main className={styles.main}>
        <div className={styles.searchForm}>search-form </div>
    <div className={styles.pages}>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/games' element={<Games />} />
    </Routes>
    </div>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App
