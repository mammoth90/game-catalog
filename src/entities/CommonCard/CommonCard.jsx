import styles from './CommonCard.module.scss'
import cn from 'classnames'
import ItemList from './ItemList.jsx'
import { Link } from 'react-router-dom'

const CommonCard = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((c) => {
        return <ItemList key={c.id} data={c} />
      })}
    </div>
  )
}

export default CommonCard
