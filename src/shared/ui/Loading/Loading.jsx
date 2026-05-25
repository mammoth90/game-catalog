import { AiOutlineLoading3Quarters as Ico } from "react-icons/ai";
import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <Ico className={styles.ico} />
    <span>LOADING...</span>
    </div>
  )
}

export default Loading
