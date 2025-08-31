// Simplify genres object into a object of key-value pair
// e.g. (from: '{id: 28, name: action}' to '{28: action}')
export const restructureGenresData = (genresData) => {
  return genresData.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {})
}
