import styles from './Screenshots.module.scss'

const Item = ({ pic }) => {
  return <img src={pic} className={styles.screenShot} />
}

export default Item
