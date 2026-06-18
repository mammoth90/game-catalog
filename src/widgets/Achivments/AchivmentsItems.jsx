import cn from 'classnames'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'

import styles from './Achivments.module.scss'

const parentElSize = 1400
const declarePosition = (num) => {
  if (num < 0) return 'left'
  else if (num > 0) return 'right'
}
const Item = ({ data }) => {
  const refEl = useRef(null)
  const imgRef = useRef(null)
  const containerRef = useRef(null)
  const [isActive, setActive] = useState(false)
  const [elWidth, setWidth] = useState(0)
  const [imgWidth, setImgWidth] = useState(0)
  const [isVisible, setVisible] = useState(false)
  const [position, setPosition] = useState('right')

  useLayoutEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth)
      const rect = containerRef.current.getBoundingClientRect()
      const width = parentElSize - rect.right - containerRef.current.scrollWidth
      setPosition(declarePosition(width))
    }
    if (imgRef.current) {
      setImgWidth(imgRef.current.scrollWidth)
    }
  }, [parentElSize])

  useEffect(() => {
    const handleClick = (e) => {
      if (!refEl.current) return
      if (!refEl.current.contains(e.target)) {
        setActive(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const wrapperClass = cn({
    [styles.imgWrapper]: true,
    [styles.imgWrapperActive]: isActive && position === 'right',
    [styles.imgWrapperActiveLeft]: isActive && position === 'left',
  })
  const shineClass = cn({
    [styles.shine]: true,
    [styles.shineActive]: isActive,
  })
  const detailsClass = cn({ [styles.detailsContainer]: true })
  return (
    <div className={styles.containerItem} ref={refEl}>
      <div>
        <div
          ref={containerRef}
          className={detailsClass}
          style={{
            width: isActive ? `${elWidth}px` : '0px',
            transition: `width 0.2s linear`,
            left: position === 'right' ? `${imgWidth}px` : `-${elWidth}px`,
            zIndex: isVisible ? '100' : '0',
            opacity: isVisible ? '1' : '0',
          }}
          onTransitionEnd={() => {
            if (isActive) return
            setVisible(false)
          }}
          onTransitionStart={() => {
            if (!isActive) return
            setVisible(true)
          }}
        >
          <p className={styles.itemTittle}> {data.name} </p>
          <span className={styles.itemDescription}> {data.description} </span>
          <span className={styles.itemPercent}>
            Players reached: {data.percent} %
          </span>
        </div>

        <div className={wrapperClass} onClick={() => setActive(!isActive)}>
          <div className={shineClass} />
          <img ref={imgRef} className={styles.itemImg} src={data.image} />
        </div>
      </div>
    </div>
  )
}

export default Item
