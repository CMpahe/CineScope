// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
import styles from '../TextTags.module.scss'

export const GenreTitle = ({ children }) => {
  return (
    <h2 className={`${styles.genre_title} subtitle2`}>{children}</h2>
  )
}
