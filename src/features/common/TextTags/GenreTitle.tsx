import styles from '../TextTags.module.scss'

export const GenreTitle = ({ children }: {children: string}) => {
  return (
    <h2 className={`${styles.genreTitle} subtitle2`}>{children}</h2>
  )
}