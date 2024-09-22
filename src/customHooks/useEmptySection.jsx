import { useEffect } from 'react'
import { scroll, getSliderPosition } from '../logic/logic'

function useEmptySection (sections, index) {
  useEffect(() => {
    const sliderPosition = Math.ceil(getSliderPosition(index) / 90)

    if (sliderPosition > (sections - 1)) {
      const direction = 'left'
      scroll({ direction, index, sections })
    }
  }, [sections])
}

export default useEmptySection
