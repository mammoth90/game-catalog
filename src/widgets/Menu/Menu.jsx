import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'
const Menu = ({ items }) => {
  return (
    <div className={styles.menuContainer}>
    <div className={styles.leftColumn}></div>
      <ul className={styles.mainMenu}>
        {items.map((i) => (
          <li className={styles.menuItems} key={i.id}><Link to={i.link}>{i.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
