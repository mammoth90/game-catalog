import styles from './ModalImg.module.scss'
import CloseIco from './assets/close.svg?react'
import { useState, useEffect } from 'react'
import { SlArrowLeft as Prev, SlArrowRight as Next } from 'react-icons/sl'

const ModalImg = ({ currentPic, picColl, click }) => {
  const [pic, setPic] = useState(currentPic)
  const [narrowedColl, setColl] = useState([])

  useEffect(() => {
    setPic(currentPic)
  }, [currentPic])

  useEffect(() => {
    const picIndexes = picColl.map((p, i) => ({ id: p.id, index: i }))
    setColl(picIndexes)
  }, [])

  const getNextIndex = (dir, index) => {
    switch (dir) {
      case 'next':
        if (index === picColl.length - 1) return 0
        else return index + 1
      case 'prev':
        if (index === 0) return picColl.length - 1
        else return index - 1
      default:
        return 0
    }
  }

  const imageSwipe = (dir) => {
    const current = narrowedColl.find((c) => c.id === pic.id)
    const nexIndex = getNextIndex(dir, current.index)
    const nextPicId = narrowedColl.find((n) => n.index === nexIndex)
    const nextPic = picColl.find((p) => p.id === nextPicId.id)
    setPic(nextPic)
  }
  return (
    pic && (
      <div className={styles.overlay}>
        <div className={styles.imgContainer}>
          <CloseIco onClick={() => click()} className={styles.buttonClose} />
          <div
            className={styles.prevButtonContainer}
            onClick={() => imageSwipe('prev')}
          >
            <Prev className={styles.buttonPrev} />
          </div>
          <div
            className={styles.nextButtonContainer}
            onClick={() => imageSwipe('next')}
          >
            <Next className={styles.buttonNext} />
          </div>
          <img className={styles.img} src={pic.image} />
        </div>
      </div>
    )
  )
}

export default ModalImg
