import { MediaCard } from './MediaCard/MediaCard'
import { checkObject } from '../utils/logic'

export const MovieSection = ({ moviesObject, search }) => {
  if (!checkObject(moviesObject)) {
    return <h2>Something went wrong!!</h2>
  }

  const data = moviesObject.movies[0]

  return (
    <section className='movies-section section'>
      <div className='movies-container'>

        {data.results.map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </div>
    </section>
  )
}
