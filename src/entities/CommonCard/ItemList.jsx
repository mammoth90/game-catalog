import styles from './CommonCard.module.scss'
import cn from 'classnames'
import { useState, useEffect } from 'react'

const ItemList = ({ data }) => {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
  }, [isActive])

  const containerClass = cn({
    [styles.card]: true,
    [styles.active]: isActive,
  })

  const cardImageClass = cn({
    [styles.cardImage]: true,
  })

  const cardTitleClass = cn({
    [styles.cardTitle]: true,
  })

  return (
    <div className={containerClass} onClick={() => setActive(!isActive)}>
      <img
        src={data.image_background}
        className={cardImageClass}
        alt={data.name}
      />
      <div className={styles.iconsDetails}></div>
      <p className={cardTitleClass}>{data.name}</p>
    </div>
  )
}

export default ItemList
