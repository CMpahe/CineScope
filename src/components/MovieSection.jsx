import { MediaCard } from './MediaCard/MediaCard'

export const MovieSection = ({ moviesObject, search }) => {
//  console.log(movies)  Esto se ejecuta cada vez que hay algun cambio, revisar cuando haya más componentes para verificar si es que la app recorre todas las funciones y componentes sin retornar nada cada vez que hay un cambio en alguen elemento
  // console.log('Estas son las películas para mostrar', moviesObject)
  if (moviesObject === null || moviesObject === undefined) {
    console.error('movies is null or undifined')
    return <h2>Something went wrong!</h2>
  }

  if (Array.isArray(moviesObject)) {
    console.error('movies is not an object, is an Array')
    return <h2>Something went wrong!</h2>
  }

  if (Object.keys(moviesObject).length === 0 || Object.keys(moviesObject.moviesWithGenres).length === 0) {
    console.error('It is an empty object')
    return <h1 className='no-result'>No results for {search}</h1>
  }

  const data = moviesObject.moviesWithGenres[0]

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
