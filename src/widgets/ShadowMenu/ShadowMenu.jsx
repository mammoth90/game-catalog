import styles from './ShadowMenu.module.scss'
import { BsList as Ico } from "react-icons/bs";
import { useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom';

const ShadowMenu = ({props}) => {
  const [isActive, setActive] = useState(false)


  const menuClass = cn({
    [styles.menu]: true,
    [styles.active]: isActive,
  })
  const overlayClass = cn({
    [styles.overlay]: true,
    [styles.activeOverlay]: !isActive,
  })
  return (
    <div className={styles.container}>
    <Ico className={styles.button} onClick={() => setActive(true)}/>
    <ul className={menuClass} >
      {props.map(m => {
        return (
        <Link to={m.link} key={`ShadowMenu_${m.id}`}>
          <li  className={styles.menuItems} onClick={() => setActive(false)}>{m.name} </li>
        </Link>
        )
      })}
    </ul>
    <div className={overlayClass} onClick={() => setActive(false)}/>
    </div>
  )
}

export default ShadowMenu
