// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useEffect } from 'react'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { scroll, getSliderPosition } from '../components/Carousel/Carousel.logic'

function useEmptySection (sections, slider) {
  useEffect(() => {
    const sliderPosition = Math.ceil(getSliderPosition(slider.current) / 90)

    if (sliderPosition > (sections - 1)) {
      const direction = 'left'
      scroll({ direction, slider, sections })
    }
  }, [sections])
}

export default useEmptySection
