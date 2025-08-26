// Create a new copie of mediaList adding the property of genres of the media translated into text
// e.g. ("['action', 'comedy', 'horror']")
export const addGenres = (mediaList, mediaGenreMap) => {
  return mediaList.map(media => ({
    ...media,
    genres: media.genre_ids.map(id => mediaGenreMap[id]) || []
  }))
}
