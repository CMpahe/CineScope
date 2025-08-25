import { checkObject, sortMediaByGenre } from '../../utils/logic'

// Simplify genres object into a object of key-value pair
// e.g. (from: '{id: 28, name: action}' to '{28: action}')
export const restructureGenresData = (genresData) => {
  return genresData.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {})
}

// Create a new copie of mediaList adding the property of genres of the media translated into text
// e.g. ("['action', 'comedy', 'horror']")
export const addGenres = (mediaList, mediaGenreMap) => {
  return mediaList.map(media => ({
    ...media,
    genres: media.genre_ids.map(id => mediaGenreMap[id]) || []
  }))
}

export const sortData = (object, genres) => {
  // Check the entry
  if (!checkObject(object) || !checkObject(genres)) return {}

  const mediaResult = {}

  for (const category in object) {
    const itemResult = {}
    for (const item of object[category]) {
      const itemSorted = sortMediaByGenre(item.results, genres[category])
      if (itemSorted) { itemResult[item.page] = itemSorted }
    }

    if (itemResult) {
      mediaResult[category] = itemResult
    }
  }
  return mediaResult
}
