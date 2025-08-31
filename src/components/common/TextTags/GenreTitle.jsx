// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
import styles from '../TextTags.module.scss'
//
//
//

export const GenreTitle = ({ children }) => {
  return (
    <h2 className={`${styles.genreTitle} subtitle2`}>{children}</h2>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This component helps to save some time and work by adding some basic settings like styles. This allows to have some structure already prepare and ready to be used.
