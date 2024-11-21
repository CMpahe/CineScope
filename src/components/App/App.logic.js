// Simplify genres object into a object of key-value pair
// e.g. (from: '{id: 28, name: action}' to '{28: action}')
export const restructureGenresData = (genresData) => {
  console.log(genresData)
  return genresData.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {})
}

// Create a new copie of mediaList adding the property of genres of the media translated into text
// e.g. ("['action', 'comedy', 'horror']")
export const addGenres = (mediaList, mediaGenreMap) => {
  console.log(mediaList)
  return mediaList.map(media => ({
    ...media,
    genres: media.genre_ids.map(id => mediaGenreMap[id]) || []
  }))
}
