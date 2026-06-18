import { useGetScreenshotsQuery } from '@/services/api/reducer'
import Loading from '@/shared/ui/Loading'
import Error from '@/shared/ui/Error'
import styles from './Screenshots.module.scss'
import Item from './ScreenShotsItems.jsx'
import { useState, useRef } from 'react'
import ModalImg from '@/shared/ui/ModalImg'
import { SlArrowLeft as Left, SlArrowRight as Right } from 'react-icons/sl'

const Screenshots = ({ id }) => {
  const refEl = useRef(null)
  const [selectedImg, setImg] = useState(null)
  const { data, isLoading, error } = useGetScreenshotsQuery(id)
  const scroll = (dir) => {
    const value = 300
    if (!refEl.current) return
    const step = dir === 'left' ? -value : value
    refEl.current.scrollBy({
      left: step,
      behavior: 'smooth',
    })
  }
  if (isLoading) return <Loading />
  if (error) return <Error />
  if (!data?.results?.length) return null
  return (
    <div className={styles.containerMain}>
      <div className={styles.container} ref={refEl}>
        {data.results.map((s) => {
          return (
            <div onClick={() => setImg(s)} key={s.id}>
              <Item pic={s.image} />
            </div>
          )
        })}
      </div>
      <div className={styles.leftButtonDiv} onClick={() => scroll('left')}>
        {' '}
        <Left />{' '}
      </div>
      <div className={styles.rightButtonDiv} onClick={() => scroll('right')}>
        {' '}
        <Right />{' '}
      </div>

      <ModalImg
        currentPic={selectedImg}
        picColl={data.results}
        click={() => setImg(null)}
      />
    </div>
  )
}

export default Screenshots
