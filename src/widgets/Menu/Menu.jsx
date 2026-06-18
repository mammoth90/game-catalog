import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'
const Menu = ({ items }) => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.leftColumn}></div>
      <ul className={styles.mainMenu}>
        {items.map((i) => (
          <Link to={i.link} key={i.id}>
            <li className={styles.menuItems}>{i.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Menu
