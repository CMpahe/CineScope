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
export const filterByGenre = (mediaList, genre) => {
  const mediaResult = []
  for (const media of mediaList) {
    // console.log(media)
    if (media.genre_ids.includes(Number(genre))) {
      mediaResult.push(media)
    }
  }

  if (mediaResult.length > 0) {
    return mediaResult
  }
  return false
}

export const sortMediaByGenre = (mediaList, genres) => {
  if (genres === undefined || mediaList === undefined) {
    console.error('Arguments provided are undefined')
    return false
  }
  const sortedGenres = {}
  // console.log(mediaList)
  for (const genre in genres) {
    const listByGenre = filterByGenre(mediaList, genre) // returns a list of all the movies having the genre passed as an argument
    if (listByGenre) {
      sortedGenres[genre] = listByGenre
    } else continue
  }
  return sortedGenres
}

// const getElementByClassAndIndex = (className, index) => {
//   const element = document.querySelectorAll(className)[index]
//   return element
// }

export const nullOrUndefinedObject = (object) => {
  if (object === null) {
    console.error('Object is null')
    return true
  } else if (object === undefined) {
    console.error('Object is undefined')
    return true
  } else return false
}

export const emptyObject = (object) => {
  if (Object.keys(object).length === 0) {
    console.error('It is an empty object')
    return true
  } else return false
}

export const checkObject = (object) => { // Check whether the object is null, empty, undefined or if it is really an object.
  if (Array.isArray(object)) {
    console.error('movies is not an object, is an Array')
    return false
  }

  if (nullOrUndefinedObject(object)) return false
  if (emptyObject(object)) return false
  return true
}

export const nullOrUndefinedList = (list) => {
  if (list === null) {
    console.error('List is null')
    return true
  } else if (list === undefined) {
    console.error('List is undefined')
    return true
  } else return false
}

export const emptyList = (list) => {
  if (list.length <= 0) {
    console.error('It is an empty list')
    return true
  }
  return false
}

export const checkList = (list) => { // Check whether the list is null, empty, undefined or if it is really an list.
  if (!Array.isArray(list)) {
    console.error('It is not an array')
    return false
  }

  if (nullOrUndefinedList) return false
  if (emptyList) return false
  return true
}
