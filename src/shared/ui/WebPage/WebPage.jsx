import styles from './WebPage.module.scss'

const WebPage = ({ url }) => {
  const webPage = url.length > 0 ? url : null
  return (
    webPage && (
      <div className={styles.container}>
        <a href={webPage}>
          <span>web page</span>
        </a>
      </div>
    )
  )
}

export default WebPage
