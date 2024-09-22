export const getMovie = ({ url, options }) => {
  return fetch(url, options)
    .then(res => res.json())
    .then(movies => {
      console.log(movies)
      return movies
    })
}

// const url = 'https://imdb-top-100-movies.p.rapidapi.com/'
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': 'b222cb0c9bmsh329b7ea439a509ep1c3472jsnbb59d498852a',
//     'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//   }
// }

// useEffect(() => {
//   getMovie({ url, options })
//     .then(movie => {
//       setMovies(movie)
//       console.log(movie)
//     })
// }, [])
