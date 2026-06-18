import { useParams } from 'react-router-dom'
import {
  useGetGameByIdQuery,
  useLazyGetAchivmentsQuery,
  useGetDlsQuery,
} from '../../services/api/reducer'
import Loading from '@/shared/ui/Loading'
import Error from '@/shared/ui/Error'
import styles from './GameDetails.module.scss'
import Badge from '@/shared/ui/RatingBadge'
import Platforms from '@/shared/ui/Platforms'
import Screenshots from '@/widgets/Screenshots'
import formateDate from '@/shared/utils/formateDate/formateDate'
import Genres from '@/shared/ui/Genres'
import Metacritic from '@/shared/ui/Metacritic'
import Playtime from '@/shared/ui/Playtime'
import Developers from '@/shared/ui/Developers'
import WebPage from '@/shared/ui/WebPage'
import Achivments from '@/widgets/Achivments'
import { useEffect, useState } from 'react'
import GameBlock from '@/widgets/GameBlock/GameBlock'

const GameDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetGameByIdQuery(id)
  const [getAchivments] = useLazyGetAchivmentsQuery()
  const [achivments, setAchivments] = useState([])
  const dlcGames = useGetDlsQuery(id)

  useEffect(() => {
    const load = async () => {
      let achivs = []

      const iter = async (page, result) => {
        const res = await getAchivments({ id, page, page_size: 40 })
        if (res.isError) return result
        result = [...result, ...res?.data?.results]
        if (res?.data?.next === null) return result
        if (page >= 3) return result
        return iter(page + 1, result)
      }
      return await iter(1, achivs)
    }
    load().then((res) => setAchivments(res))
  }, [id])

  if (isLoading) return <Loading />
  if (error) return <Error />
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <div className={styles.achivesContainer}></div>
        <div className={styles.titleContainer}>
          <h2 className={styles.tittle}>{data.name}</h2>
        </div>
        <div className={styles.badge}>
          <Badge rating={data.rating} />
        </div>
        <div className={styles.details}>
          <span className={styles.released}>{formateDate(data.released)}</span>
          <Platforms platforms={data.platforms} />
          <Genres genres={data.genres} />
          <Metacritic rate={data.metacritic} url={data.metacritic_url} />
          <Playtime hours={data.playtime} />
          <Developers developers={data.developers} />
          <WebPage url={data.website} />
        </div>
        <img src={data.background_image_additional} className={styles.img} />
        <div className={styles.wraper}>
          <div className={styles.shine} />
          <img src={data.background_image} className={styles.gameImg} />
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.description}> {data.description_raw} </p>
        <Screenshots id={data.id} />
        <Achivments achivs={achivments} />
        <GameBlock title="DLC" responce={dlcGames} />
      </div>
    </div>
  )
}

export default GameDetails
