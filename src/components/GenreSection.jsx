import { getMoviesSortedByGenre } from '../logic/logic'
import { genres } from '../data/data'
import { GenreContainer } from './GenreContainer'
import { SliderProvider } from '../context/slider'
import useWindowResize from '../customHooks/useWindowResize'

// METER OTRA PELICULA A LOS 1150px para un total de 6 peliculas por sección
export const GenreSection = ({ movies }) => {
  const moviesPerSection = useWindowResize()

  const listOfGenres = getMoviesSortedByGenre({ genres, movies })

  return (
    <section className='genre-section section'>
      {
        listOfGenres.map((genre, index) => {
          return (

            <SliderProvider listByGenre={genre} moviesPerSection={moviesPerSection} key={index}>

              <GenreContainer genre={genres[index]} index={index} key={genres[index]} />

            </SliderProvider>

          )
        })
      }
    </section>
  )
}
