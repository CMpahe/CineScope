import { useState } from 'react'

export const useSectionController = (sectionNumber: number) => {
  const [currentSection, setCurrentSection] = useState(0) // Current Section state

  const moveUp = () => {
    if (currentSection < Math.max(sectionNumber - 1, 0)) {
      setCurrentSection(prev => Math.min(sectionNumber - 1, prev + 1))
    }
  }

  const moveDown = () => {
    if (currentSection > 0) { setCurrentSection(prev => Math.max(0, prev - 1)) }
  }

  const setSection = (section: number) => { if(section >= 0) setCurrentSection(section) }

  return { section: currentSection, moveUp, moveDown, setSection }
}
