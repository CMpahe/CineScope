// scroll: is a function that allows to make a left and right scroll in the slider when it is applied to a slider-controler
export const scroll = ({ direction, sliderRef, sections }) => {
  const sliderPosition = getSliderPosition(sliderRef.current)

  const result = sections - sliderPosition / 90

  if (
    direction === 'right' &&
           result > 1) {
    sliderRef.current.style.setProperty('transform',
          `translate(-${sliderPosition + 90}%)`)
    activateIndicatorWithSlider(sliderRef.current)
  } else if (

    sliderPosition !== 0 &&
                      direction === 'left'
  ) {
    sliderRef.current.style.setProperty('transform', `translate(-${sliderPosition - 90}%)`)
    activateIndicatorWithSlider(sliderRef.current)
  }
}

export const activateIndicatorWithSlider = (slider) => {
  const indicators = slider.parentNode.previousSibling.childNodes[1].childNodes

  const indicatorPosition = getSliderPosition(slider) / 90

  for (const indicator of indicators) {
    indicator.dataset.active = 'false'
  }
  indicators[indicatorPosition].dataset.active = 'true'
}

export const activateIndicatorWithTarget = (index, target) => {
  const indicators = target.parentNode.childNodes

  for (const indicator of indicators) {
    if (indicator.dataset.index !== index.toString()) {
      indicator.dataset.active = 'false'
    }
  }
  // const paginationIndicator = target.parentNode.childNodes

  // for (const indicador of paginationIndicator) {
  //   indicador.classList.remove('active')
  // }
  // target.classList.add('active')
}

export const translateSliderWithIndicator = (index, indicator) => {
  const paginationIndicator = indicator.parentNode

  const slider = paginationIndicator.parentNode.nextSibling.childNodes[1]

  slider.style.setProperty('transform', `translate(${-90 * index}%)`)

  // for (let element = 0; element < indicators.length; element++) {
  // if (indicators[element].className === 'active') {
  //   slider.style.setProperty('transform',
  //     `translate(${-90 * element}%)`)
  //   break
  // }
  //   }
}

export const getSliderPosition = (slider) => {
  const sliderPosition = Number(slider.style.transform.slice(11, -2))
  return sliderPosition
}

// getSlider: this function receive a number as an argument called index, then it use it to look for the slider corresponding to that index and returns it
// export const getSlider = (index) => {
//   const slider = document.querySelectorAll('.slider')[index]
//   return slider
// }
