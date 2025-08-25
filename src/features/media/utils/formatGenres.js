// ---- ---- ---- ---- LOGIC ---- ---- ---- ----
import { restructureGenresData } from '../../../components/App/App.logic'
//
//
//

export const formatGenres = (genresResponse) => {
  if (typeof genresResponse === 'object' && genresResponse !== null && !Array.isArray(genresResponse)) { // Check the object received as an argument
    const result = Object.entries(genresResponse).map(([key, item]) => [
      key,
      restructureGenresData(item.genres) // Restructure the genres into = movies: {28: 'Action', 12: 'Adventure'}
    ])

    return Object.fromEntries(result) // Turns the list back into an object before returning the result.
  }
  return null // if argument is invalid
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This function is responseble for formatting the Genres data received from the API into a more readable form using 'restructureGenresData'.

// formatGenres only maps the object and pass each object within it to the function 'restructureGenresData' to be set into a better format.

// This function returns null if the argument is invalid.

// - genresResponse -> This parameter should contain the Genres Data received from the API.
