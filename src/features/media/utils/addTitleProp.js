export const addTitleProp = (element) => {
  return element.map(pack => ({
    ...pack,
    results: pack.results.map(media => ({
      ...media,
      title: media.name
    }))
  }))
}

// Add a 'title' property to an object, allowing the input filter the all media by the media.title.
