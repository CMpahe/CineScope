import styles from './MediaCard.module.scss'

export const MediaCard = ({ media }) => {
  return (
    <div className={styles.movie}>

      <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title} />

      <div className={styles.movie_info}>

        <h3 className='card-title'>{media.title}</h3>

        <div>
          <p className='card-text light'>{media.release_date}</p>

          <p className='card-text light'>
            <span>Genre: </span>
            {media.genres?.length
              ? media.genres.join(', ')
              : 'No genres available'}
          </p>
        </div>

      </div>
    </div>
  )
}
