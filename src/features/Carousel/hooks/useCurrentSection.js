// ---- ---- ---- ---- HOOKS  ---- ---- ---- ----
import { useState } from 'react'
//
//
//

export const useCurrentSection = (sections) => {
  const [currentSection, setCurrentSection] = useState(0) // Current Section state

  const moveUp = () => {
    if (currentSection < sections - 1) {
      setCurrentSection(prev => prev + 1)
    }
  }

  const moveDown = () => {
    if (currentSection > 0) {
      setCurrentSection(prevCurrentSection => prevCurrentSection - 1)
    }
  }

  const setSection = (section) => {
    setCurrentSection(section)
  }

  return { section: currentSection, moveUp, moveDown, setSection }
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This provides a global state more centralized for visible section handling, making it better for scalability.

// This hook holds the state of the current Section position of the slider, so both the Slider and the Pagination indicator can use it and work synchronized. The Control component can as well use this hook to read and modify the visible section.

// - moveUp -> It is a method that update the state increasing it by 1.

// - moveDown -> It is a method that update the state decreasing it by 1.

// - setSection -> Allows to set the section by the value passed as an argument.
