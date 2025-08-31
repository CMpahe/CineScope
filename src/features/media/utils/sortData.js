// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { checkObject, sortMediaByGenre } from '../../../utils/logic'
//
//
//

// Create an object with media organized by its genre Category
export const sortData = (object, genres) => {
  // Check the entry
  if (!checkObject(object) || !checkObject(genres)) return {}

  const mediaResult = {}

  for (const category in object) { // Iterate each category media within the mediaObject e.g. (movies: {...}, tv: {...})
    const itemResult = {}
    for (const item of object[category]) {
      const itemSorted = sortMediaByGenre(item.results, genres[category]) // Pass '.results' property, this is the one that holds all the media within that object
      if (itemSorted) { itemResult[item.page] = itemSorted }
    }

    if (itemResult) {
      mediaResult[category] = itemResult
    }
  }
  return mediaResult
}

// - object -> Received and object like this: {movies: {...}, tv: {...}}

// - genres -> Received and object like this: {movies: {...}, tv: {...}}
