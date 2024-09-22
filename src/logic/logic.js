// filterMovies: This function recives an array and a varible
// with a word and returns an array with movies that its titles
// matches the word given in the varible passad through the props

export const filterMovies = ({ search, movies }) => {
  if (search === false || search === '') {
    return movies
  } else {
    const moviesResult = movies.filter((movie) => movie.title.toUpperCase().includes(search.toUpperCase()))
    return moviesResult
  }
}

// Return a list of movies of the same genre
export const filterByGenre = ({ genre, movies }) => {
  const moviesResult = movies.filter((movie) => movie.genre.includes(genre))
  return moviesResult
}

export const getMoviesSortedByGenre = ({ genres, movies }) => {
  const listOfGenres = []
  for (const genre of genres) {
    const listByGenre = filterByGenre({ genre, movies })
    listOfGenres.push(listByGenre)
  }
  return listOfGenres
}

// scroll: is a function that allows to make a left and right scroll in the slider when it is applied to a slider-controler
export const scroll = ({ direction, index, sections }) => {
  const slider = getSlider(index)
  const sliderPosition = getSliderPosition(index)

  const result = sections - sliderPosition / 90

  if (
    direction === 'right' &&
         result > 1) {
    slider.style.setProperty('transform',
        `translate(-${sliderPosition + 90}%)`)
    activateIndicatorWithSlider(slider, index)
  } else if (

    sliderPosition !== 0 &&
                    direction === 'left'
  ) {
    slider.style.setProperty('transform', `translate(-${sliderPosition - 90}%)`)
    activateIndicatorWithSlider(slider, index)
  }
}

export const activateIndicatorWithSlider = (slider, index) => {
  const indicators = slider.parentNode.previousSibling.childNodes[1].childNodes

  const indicatorPosition = getSliderPosition(index) / 90

  for (const indicator of indicators) {
    indicator.classList.remove('active')
  }
  indicators[indicatorPosition].classList.add('active')
}

export const activateIndicatorWithTarget = (target) => {
  const paginationIndicator = target.parentNode.childNodes

  for (const indicador of paginationIndicator) {
    indicador.classList.remove('active')
  }
  target.classList.add('active')
}

export const translateSliderWithIndicator = (indicator) => {
  const paginationIndicator = indicator.parentNode
  const indicators = paginationIndicator.childNodes
  const slider = paginationIndicator.parentNode.nextSibling.childNodes[1]

  for (let element = 0; element < indicators.length; element++) {
    if (indicators[element].className === 'active') {
      slider.style.setProperty('transform',
        `translate(${-90 * element}%)`)
      break
    }
  }
}

// getSlider: this function receive a number as an argument called index, then it use it to look for the slider corresponding to that index and returns it
export const getSlider = (index) => {
  const slider = document.querySelectorAll('.slider')[index]
  return slider
}

export const getSliderPosition = (index) => {
  const sliderPosition = Number(getSlider(index).style.transform.slice(11, -2))
  return sliderPosition
}

const getElementByClassAndIndex = (className, index) => {
  const element = document.querySelectorAll(className)[index]
  return element
}
