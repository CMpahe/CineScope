// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { GenreContainer } from './GenreContainer'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { getMoviesSortedByGenre } from '../logic/logic'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import useWindowResize from '../customHooks/useWindowResize'
// ---- ---- ---- ----  CONTEXT PROVIDER  ---- ---- ---- ----
import { SliderProvider } from '../context/slider'
// ---- ---- ---- ----  DATA  ---- ---- ---- ----
import { genres } from '../data/data'

// TO DO: METER OTRA PELICULA A LOS 1150px para un total de 6 peliculas por sección
export const GenreSection = ({ movies }) => {
  const moviesPerSection = useWindowResize() // Set the amount of movies per section according on the viewport size

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
