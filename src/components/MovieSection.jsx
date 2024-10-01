export const MovieSection = ({ movies, search }) => {
//  console.log(movies)  Esto se ejecuta cada vez que hay algun cambio, revisar cuando haya más componentes para verificar si es que la app recorre todas las funciones y componentes sin retornar nada cada vez que hay un cambio en alguen elemento

  return (
    <section className='movies-section section'>
      {
      Object.keys(movies).length === 0
        ? <h1 className='no-result'>No results for {search}</h1>
        : <div className='movies-container'>
          {movies.map((movie) => {
            return (
              <div key={movie.id} className='movie'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className='movie-info'>
                  <h3>{movie.title}</h3>
                  <p>{movie.yrelease_date}</p>
                  <p><span>Genre: </span></p> {/* añadir el genre de la película */}
                </div>
              </div>
            )
          })}
          </div>
      }
    </section>
  )
}
