// filterMovies: This function recives an array and a varible
// with a word and returns an array with movies that its titles
// matches the word given in the varible passad through the props

export const filterMovies = ({ search, movies }) => {
  if (search === false || search === '') {
    return movies
  } else {
    const moviesResult = movies.filter((movie) => movie.title.toUpperCase().includes(search.toUpperCase()))
    return moviesResult
  }
}

// Return a list of movies of the same genre
export const filterByGenre = ({ genre, movies }) => {
  const moviesResult = movies.filter((movie) => movie.genre.includes(genre))
  return moviesResult
}

export const getMoviesSortedByGenre = ({ genres, movies }) => {
  const listOfGenres = []
  for (const genre of genres) {
    const listByGenre = filterByGenre({ genre, movies })
    listOfGenres.push(listByGenre)
  }
  return listOfGenres
}

// const getElementByClassAndIndex = (className, index) => {
//   const element = document.querySelectorAll(className)[index]
//   return element
// }
