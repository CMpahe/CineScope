export const formatGenres = (data) => {
  // 1. Check the object received as an argument
  if (!typeof data === 'object' || data === null || Array.isArray(data)) return null

  const genres = data.genres

  // 2. Restructure the genres object
  const result = genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {})

  // 3. Returns genres
  return result
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This function is responseble for formatting the Genres data received from the API into a more readable form using 'restructureGenresData'.

// formatGenres only maps the object and pass each object within it to the function 'restructureGenresData' to be set into a better format.

// This function returns null if the argument is invalid.

// - genresResponse -> This parameter should contain the Genres Data received from the API.
