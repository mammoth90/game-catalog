import GameCard from "../../entities/GameCard"
import { useGetGamesQuery } from "../../services/api/reducer.js"
import styles from './Games.module.scss'
import { useState, useEffect, useRef} from "react"
import Loading from "../../shared/ui/Loading"
import Error from "../../shared/ui/Error"

const page_size = 20

const initialParams = {
    page: 1,
    page_size,
}
const Games = () => {
  const [queryParams, setQuerryParams] = useState(initialParams)
  const totalPages = useRef(null)
  const refLock = useRef(false)
  const [games, setGames] = useState([])
  const { data, isLoading, error} = useGetGamesQuery({
    ...queryParams
  })
useEffect (() => {
  const handleWheel = () => {
    if (refLock.current) return
  const scrollY = window.scrollY
  const innerHeight = window.innerHeight
  const contentHeight = document.documentElement.scrollHeight
  if (contentHeight - (scrollY + innerHeight) <= 100){
    setQuerryParams(prev => {
      console.log('prev.page:', prev.page)
      console.log('totalPages:', totalPages.current)
      if (prev.page >= totalPages.current) return prev
      return ({
      ...prev,
      page: prev.page + 1,
    })})
    refLock.current = true
  }
  }
  window.addEventListener('scroll', handleWheel)

  return () => {
    window.removeEventListener('scroll', handleWheel)
    } 
}, [])

  useEffect (() => {
    if (!data?.results) return
    totalPages.current = Math.ceil( data.count / page_size )
    setGames(prev => {
      const newGames = data.results.filter(g => !prev.some(p => p.id === g.id))
      return [...prev, ...newGames]
    })
      refLock.current = false
  }, [data])

  if (isLoading)  return  <Loading />
  if (error) return <Error />

  return (
    <div className={styles.main}>
    {games.map(game => <GameCard key={game.id} game={game} />)}
    </div>
  )
}

export default Games
