import GameCard from '@/entities/GameCard'
import { useLazyGetGamesQuery } from '@/services/api/reducer.js'
import { useSearchParams } from 'react-router-dom'
import styles from './Games.module.scss'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Loading from '@/shared/ui/Loading'
import Error from '@/shared/ui/Error'
import GameList from './GameList.jsx'

const page_size = 20

const initialParams = {
  page: 1,
  page_size,
}
const Games = () => {
  const [searchParams] = useSearchParams()
  const [queryParams, setQuerryParams] = useState(null)
  const totalPages = useRef(null)
  const refLock = useRef(true)
  const [games, setGames] = useState([])
  const [getGames, { data, isLoading, isError, isFetching }] =
    useLazyGetGamesQuery()
  const search = searchParams.get('search')

  useLayoutEffect(() => {
    setQuerryParams(() => {
      if (search === null) {
        return {
          ...initialParams,
        }
      } else {
        return {
          ...initialParams,
          search,
        }
      }
    })
    setGames([])
  }, [search])

  useEffect(() => {
    if (!queryParams) return
    getGames(queryParams)
  }, [queryParams])

  useEffect(() => {
    const handleWheel = () => {
      if (refLock.current) return
      const scrollY = window.scrollY
      const innerHeight = window.innerHeight
      const contentHeight = document.documentElement.scrollHeight
      if (contentHeight - (scrollY + innerHeight) <= 100) {
        setQuerryParams((prev) => {
          if (prev.page >= totalPages.current) return prev
          return {
            ...prev,
            page: prev.page + 1,
          }
        })
        refLock.current = true
      }
    }
    window.addEventListener('scroll', handleWheel)

    return () => {
      window.removeEventListener('scroll', handleWheel)
    }
  }, [])

  useEffect(() => {
    if (!data?.results) return
    totalPages.current = Math.ceil(data.count / page_size)
    setGames((prev) => {
      const newGames = data.results.filter(
        (g) => !prev.some((p) => p.id === g.id)
      )
      return [...prev, ...newGames]
    })
    refLock.current = false
  }, [data])

  if (isLoading) return <Loading />
  if (isError) return <Error />
  if (!isFetching && games.length === 0) return 'no results'

  return (
    <div className={styles.main}>
      <GameList games={games} />
      {isFetching && <Loading className={styles.fetchingIco} />}
    </div>
  )
}

export default Games
