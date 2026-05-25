import { AiOutlineWifi as ErrorIco } from "react-icons/ai";
import styles from './Error.module.scss'

const Error = () => {
  return (
    <div className={styles.errorContainer}>
    <ErrorIco className={styles.ico} />
    <span className={styles.errorTittle}>BAD INTERNET CONNECTION :( </span>
    </div>
  )
}

export default Error
