// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { CarouselContainer } from './CarouselContainer'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { getMoviesSortedByGenre } from '../utils/logic'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import useWindowResize from '../customHooks/useWindowResize'
// ---- ---- ---- ----  CONTEXT PROVIDER  ---- ---- ---- ----
// import { SliderProvider } from '../context/slider'
// ---- ---- ---- ----  DATA  ---- ---- ---- ----
import { genres } from '../data/data'

// TO DO: METER OTRA PELICULA A LOS 1150px para un total de 6 peliculas por sección
export const GenreSection = ({ movies }) => {
  const itemsPerSection = useWindowResize() // Set the amount of movies per section according on the viewport size

  const listOfGenres = getMoviesSortedByGenre({ genres, movies }) // esto es lo mismo que listByGenre
  // Devuelve una lista llena de arrays, cada uno con películas de un mismo género

  // Revisar lo del title porque cuando CarouselContainer solo deberia recibir un objeto que contenga la información necesaria para renderizarlo, ejemplo: Título del contenedor, array con los items que se van a mostrar

  return (
    <section className='genre-section section'>
      {
        listOfGenres.map((data, index) => {
          return (

            <CarouselContainer data={data} title={genres[index]} itemsPerSection={itemsPerSection} key={genres[index]} />
            // cambiar el valor de index en el key por otro valor que proporcione el objeto que va a renderizar CarouselContainer
          )
        })
      }
    </section>
  )
}
