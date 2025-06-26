// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './MediaCard.module.scss'

export const MediaCard = ({ children, isHovered, onPointerEnter, onPointerLeave }) => {
  return (
    <div
      className={`${styles.movie} ${isHovered ? styles.hovering : ''}`}
      // Hover handling functions
      onPointerEnter={() => onPointerEnter(children.id)}
      onPointerLeave={() => onPointerLeave(children.id)}
    >

      <img src={`https://image.tmdb.org/t/p/w500${children.poster_path}`} alt={children.title} />

      <div className={styles.movie_info}>

        <h3 className='card-title'>{children.title}</h3>

        <div>
          <p className='card-text opaque'>{children.release_date}</p>

          <p className='card-text'>
            {children.genres?.length
              ? children.genres.join(' • ')
              : 'No genres available'}
          </p>
        </div>

      </div>
    </div>
  )
}
