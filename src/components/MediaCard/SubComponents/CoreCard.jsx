import styles from '../MediaCard.module.scss'

export const CoreCard = ({
  children,
  showPortal,
  cardRef,
  handlePointer = false
}) => {
  return (handlePointer
    ? <div
        className={`${styles.movie} ${showPortal ? styles.hovering : ''}`}
        ref={cardRef}
      // Hover handling functions
        onPointerEnter={() => handlePointer.enter()}
        onPointerLeave={() => handlePointer.leave()}
      >

      <img src={`https://image.tmdb.org/t/p/w500${children.poster_path}`} alt={children.title} />

      {/* <div className={styles.movie_info}>

        <h3 className='card-title'>{children.title}</h3>

        <div>
          <p className='card-text opaque'>{children.release_date}</p>

          <p className='card-text'>
            {children.genres?.length
              ? children.genres.join(' • ')
              : 'No genres available'}
          </p>
        </div>

      </div> */}
    </div>
    : <div
        className={`${styles.movie}`}
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
