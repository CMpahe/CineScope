export const MovieSection = ({ movies, search }) => {
//  console.log(movies)  Esto se ejecuta cada vez que hay algun cambio, revisar cuando haya más componentes para verificar si es que la app recorre todas las funciones y componentes sin retornar nada cada vez que hay un cambio en alguen elemento
  return (
    <section className='movies-section section'>
      {
      movies.length === 0
        ? <h1 className='no-result'>No results for {search}</h1>
        : <div className='movies-container'>
          {movies.map((movie) => {
            return (
              <div key={movie.id} className='movie'>
                <img src={movie.image} alt={movie.title} />
                <div className='movie-info'>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <p><span>Genre: </span>{movie.genre.join(', ')}</p>
                </div>
              </div>
            )
          })}
          </div>
      }
    </section>
  )
}
