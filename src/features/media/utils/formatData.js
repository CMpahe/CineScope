// ---- ---- ---- ---- LOGIC ---- ---- ---- ----
import { addGenres } from './addGenres'
import { addTitleProp } from './addTitleProp'
//
//
//

export const formatData = (apiResponse, formattedGenres) => {
  if (!apiResponse) return [] // Checking the apiResponse
  else {
    const destructuredData = Object.entries(apiResponse)
    // from this => { movies: [{...}, {...}], tv: [{...}, {...}] }
    // to this => [ [ 'movies', [{...}, {...}] ], [ 'tv', [{...}, {...}] ] ]

    const result = destructuredData.map(([key, item]) => { // e.g.: key => 'movies' | item => [{...}, {...}]
      if (Array.isArray(item) && item.length > 0 && item !== null) { // Checking each item within the main object received from the API
        //
        //

        if (key === 'tv') { // If 'tv' add before the 'title' prop to each media so it can be filter properly
          return [
            key,
            addTitleProp(item).map(pack => ({ // mapping the value (list) of the movies and tv properties => [{...}, {...}]]
              ...pack,
              results: addGenres(pack.results, formattedGenres[key]) // Add a new property to the object
            }))
          ]
        }
        return [
          key,
          item.map(pack => ({ // mapping the value (list) of the movies and tv properties => [{...}, {...}]]
            ...pack,
            results: addGenres(pack.results, formattedGenres[key]) // Add a new property to the object
          }))
        ]
        //
        //
      } else return [] // if check fails returns an empty list
      //
      //
    })

    if (result) return Object.fromEntries(result) // turns result back into an object before returning it
    else return []
  }
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This function is responsable for formate the data received from the API, it adds another property within the media package object called 'results'

// this is the same list with all the media objects, but now each one has a property called 'genres' with the media genres translated from numbers into strings.

// e.g.: (genres: ['Action', 'Horror', 'Comedy'])

// ---- ---- PROPS ---- ----

// - apiResponse should be like = {movies: [{...}, {...}], tv: [{...}, {...}]}

// The apiResponse prop is the main object received from the api with and intended to translate its genres into a string.

// - formattedGenres should be like = { movies: {28: 'Action', 12: 'Adventure'}, tv: {16: 'Animation', 18 : 'Drama'} }

// formattedGenres is an object with the genres code and it value in string.
