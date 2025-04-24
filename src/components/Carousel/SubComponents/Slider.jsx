// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../Carousel.module.scss'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { forwardRef } from 'react'

export const Slider = forwardRef(({ data }, ref) => {
  // console.log('Y yo recibo esta data de carrousel:', data)
  return (
    <div className={styles.slider} ref={ref}>
      {
        data.map((media) => {
          return (
            <div key={media.id} className={`${styles.movie} movie`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                alt={media.name}
              />
              <div className='movie-info P-regular'>
                <h3 className='movie-title title2'>
                  {media.name}
                </h3>
                <section>
                  <p>{media.first_air_date}</p>
                  <p><span>Genre: </span>{media.genres.join(', ')}</p>
                </section>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
)
