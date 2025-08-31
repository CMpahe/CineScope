// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useEffect } from 'react'
//
//
//

function useEmptySection (sections, currentSection) {
  useEffect(() => {
    if (currentSection.section > (sections - 1)) {
      currentSection.setSection(sections - 1)
    }
  }, [sections])
}

export default useEmptySection

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This custom hook prevents the slider from being positioned into a empty section when rezising the viewport.
// If the slider remains into an empty section after rezising the viewport the useEmptySection will move the slider to the last visible section.
