// ---- ---- ---- ---- LOGIC ---- ---- ---- ----
import { addGenres } from './addGenres'
import { addTitleProp } from './addTitleProp'
//
//
//

export const formatData = (data, genres, tv = false) => {
  // 1. Check the arguments
  if (Array.isArray(data) || data === null || data.length === 0) { console.error('Invalid aguments for formatData: data'); return [] }
  if (Array.isArray(genres) || genres === null || genres.length === 0) { console.error('Invalid aguments for formatData: genres'); return [] }
  if (typeof tv !== 'boolean') { console.error('Invalid aguments for formatData: tv is not boolean'); return [] }

  // 2. If 'tv' add the 'title' prop to each media so it can be filter properly
  if (tv) {
    const newData = addTitleProp(data.results)
    const result = {
      ...newData,
      results: addGenres(newData.results, genres)
    }
    return result
  }

  // 3. Add genres string in each movie object within results property
  const result = {
    ...data,
    results: addGenres(data.results, genres)
  }
  return result
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This function is responsable for formate the data received from the API, it takes every movie object and adds a new property called 'Genres'. This property contains the genres translated into strings

// e.g.: (genres: ['Action', 'Horror', 'Comedy'])

// ---- ---- PROPS ---- ----

// - data: should be like = { page: 1, results: [{...}, {...}], total_pages: 500 }

// The 'data' argument is the main object received from the api and intended to translate its genres into a string.

// - genres: should be like = {28: 'Action', 12: 'Adventure'}
