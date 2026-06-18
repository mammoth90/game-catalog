import styles from './Achivments.module.scss'
import cn from 'classnames'
import Item from './AchivmentsItems.jsx'
import { useLayoutEffect, useState, useRef } from 'react'
import { SlArrowDown as Down, SlArrowUp as Up } from 'react-icons/sl'

const minHeight = 95
const Achivments = ({ achivs }) => {
  const refEl = useRef(null)
  const [maxHeight, setHeight] = useState(minHeight)
  const [isActive, setActive] = useState(false)
  const [positionLeft, setPosition] = useState(0)
  useLayoutEffect(() => {
    if (!refEl.current) return
    setHeight(refEl.current.scrollHeight)
  }, [achivs])

  useLayoutEffect(() => {
    if (!refEl.current) return
    const rect = refEl.current.getBoundingClientRect().right
    setPosition(rect)
  }, [refEl])

  const Ico = isActive ? Up : Down
  const containerClass = cn({
    [styles.container]: true,
    [styles.active]: isActive,
    [styles.inActive]: !isActive,
  })
  if (achivs.length === 0) return null
  return (
    <div>
      <h2 className={styles.widgetTittle}> Achivments available: </h2>
      <div
        className={containerClass}
        ref={refEl}
        style={{
          height: isActive ? `${maxHeight}px` : `${minHeight}px`,
          transition: 'height 0.5s ease, box-shadow 0.5s ease',
          boxShadow: isActive
            ? '0px 0px 10px 7px rgba(255, 255, 255, 0.1) inset'
            : 'none',
        }}
      >
        {achivs.map((d) => {
          return <Item key={d.id} data={d} parentElSize={positionLeft} />
        })}
      </div>
      <Ico className={styles.button} onClick={() => setActive(!isActive)} />
    </div>
  )
}

export default Achivments
