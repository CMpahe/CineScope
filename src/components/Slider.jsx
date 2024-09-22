import { useSlider } from '../customHooks/useSlider'

export const Slider = () => {
  const { listByGenre } = useSlider()
  return (
    <div className='slider'>
      {
        listByGenre.map((movie) => {
          return (
            <div key={movie.id} className='movie'>
              <img
                src={movie.image}
                alt={movie.title}
              />
              <div className='movie-info P-regular'>
                <h3 className='movie-title title2'>
                  {movie.title}
                </h3>
                <section>
                  <p>{movie.year}</p>
                  <p><span>Genre: </span>{movie.genre.join(', ')}</p>
                </section>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
